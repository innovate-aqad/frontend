import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {markers, mapDarkStyle, mapStandardStyle} from './MapData';
import StarRating from './StartRating';
import {useTheme} from '@react-navigation/native';
import {Divider} from 'react-native-paper';
import phone from '../../Assets/image/google_map/phone_flip.svg';
import message from '../../Assets/image/google_map/comment.svg';
import SvgUri from 'react-native-svg-uri';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 180;
const CARD_WIDTH = width * 0.85;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default function Support() {
  const theme = useTheme();

  const initialMapState = {
    markers,
    categories: [
      {
        name: 'Fastfood Center',
        icon: (
          <MaterialCommunityIcons
            style={styles.chipsIcon}
            name="food-fork-drink"
            size={18}
          />
        ),
      },
      {
        name: 'Restaurant',
        icon: (
          <Ionicons name="ios-restaurant" style={styles.chipsIcon} size={18} />
        ),
      },
      {
        name: 'Dineouts',
        icon: (
          <Ionicons name="md-restaurant" style={styles.chipsIcon} size={18} />
        ),
      },
      {
        name: 'Snacks Corner',
        icon: (
          <MaterialCommunityIcons
            name="food"
            style={styles.chipsIcon}
            size={18}
          />
        ),
      },
      {
        name: 'Hotel',
        icon: <Fontisto name="hotel" style={styles.chipsIcon} size={15} />,
      },
    ],
    region: {
      latitude: 22.62938671242907,
      longitude: 88.4354486029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  };

  const [state, setState] = useState(initialMapState);

  let mapIndex = 0;
  const mapAnimation = new Animated.Value(0);
  const _map = useRef(null);
  const _scrollView = useRef(null);
  let regionTimeout;

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {coordinate} = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
    return () => mapAnimation.removeAllListeners();
  }, [
    mapAnimation,
    state.markers,
    state.region.latitudeDelta,
    state.region.longitudeDelta,
  ]);

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  const onMarkerPress = mapEventData => {
    const markerID = mapEventData._targetInst.return.key;
    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x -= SPACING_FOR_CARD_INSET;
    }
    _scrollView.current.scrollTo({x, y: 0, animated: true});
  };

  return (
    <View style={styles.container}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 15, width: 23.3, tintColor: 'white'}}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          CURRENT DELIVERY
        </Text>
      </View>
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}>
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          // return (
          //   <MapView.Marker
          //     key={index}
          //     coordinate={marker.coordinate}
          //     onPress={(e) => onMarkerPress(e)}
          //   >
          //     <Animated.View style={[styles.markerWrap]}>
          //       <Animated.Image
          //         source={require('../../Assets/image/free_shipping_amico.png')}
          //         style={[styles.marker, scaleStyle]}
          //         resizeMode="cover"
          //       />
          //     </Animated.View>
          //   </MapView.Marker>
          // );
        })}
      </MapView>
      {/* <View style={styles.searchBox}>
        <TextInput
          placeholder="Search here"
          placeholderTextColor="#000"
          autoCapitalize="none"
          style={{flex: 1, padding: 0}}
        />
        <Ionicons name="ios-search" size={20} />
      </View> */}
      {/* <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={50}
        style={styles.chipsScrollView}
        contentInset={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 20,
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0,
        }}>
        {state.categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.chipsItem}>
            {category.icon}
            <Text>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}

      <Animated.ScrollView
        ref={_scrollView}
        // horizontal
        // showsHorizontalScrollIndicator
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={true}
        // snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 40,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {state.markers.map((marker, index) => (
          // <View style={styles.card1} key={index}>
            <View key={index} className="p-3 my-3 bg-white rounded-lg shadow">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#00274d]  font-[Poppins-SemiBold]">
                Current Order ID #2564712
              </Text>
              <Text className="text-[#21d59b] bg-[#e2f3ed] px-3 py-1 rounded-full text-[7px]  font-[Poppins-SemiBold]">
                In Transit
              </Text>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-row mt-1 gap-x-2">
              <View className="flex flex-col relative right-2 justify-between mb-11 border-r border-dashed border-[#f96900]">
                <View className="w-3 relative bg-white left-1.5 h-3 border-2 border-[#f96900] rounded-full"></View>
                <View className="w-3 h-3 relative left-1.5  bg-[#f96900] rounded-full"></View>
                <View className="w-3 h-3 relative left-1.5  bg-[#f96900] rounded-full"></View>
              </View>

              <View className="flex flex-col gap-y-1">
                <View className="flex flex-col ">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                    Pickup Point
                  </Text>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                  Delivery Point - 1
                  </Text>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
                <View className="flex flex-col ">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                  Delivery Point - 2
                  </Text>
                  <Text className="text-[#7e84a3] text-[13px]  font-[Poppins-Light]">
                    Forest Hills South Side, Pasthal, Boisar, 401504
                  </Text>
                </View>
              </View>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Regular]">
                Order Date : May 16, 2024
              </Text>
              <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Regular]">
                Delivery Date : May 19, 2024
              </Text>
            </View>
          </View>
          // </View>
        ))}
        {state.markers.map((marker, index) => (
          <View style={styles.card} key={index}>
            <View className="flex flex-row items-center justify-between">
              <Text className="text-[#00274d]  font-[Poppins-SemiBold]">
                Contact Details
              </Text>
            </View>
            <Divider className="my-2 bg-[#e6e9f4]"></Divider>
            <View className="flex flex-col justify-between gap-y-2">
              <View className="flex flex-row items-center justify-between">
                <View className="">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                    Pickup
                  </Text>
                  <Text className="text-[#00274d] text-[10px]  font-[Poppins-Regular]">
                    Altenwerth Keara
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-x-3">
                  <Text className="p-1.5 bg-blue-100 border border-[#87b1ff] rounded-full">
                    <SvgUri source={message} />
                  </Text>
                  <Text className="p-1.5 bg-[#faebe1] border border-[#fbac74] rounded-full">
                    <SvgUri source={phone} />
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <View className="">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                  Dropoff
                  </Text>
                  <Text className="text-[#00274d] text-[10px]  font-[Poppins-Regular]">
                  Christiansen Gustave
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-x-3">
                  <Text className="p-1.5 bg-blue-100 border border-[#87b1ff] rounded-full">
                    <SvgUri source={message} />
                  </Text>
                  <Text className="p-1.5 bg-[#faebe1] border border-[#fbac74] rounded-full">
                    <SvgUri source={phone} />
                  </Text>
                </View>
              </View>
              <View className="flex flex-row items-center justify-between">
                <View className="">
                  <Text className="text-[#f96900] text-[10px]  font-[Poppins-SemiBold]">
                  Support
                  </Text>
                  <Text className="text-[#00274d] text-[10px]  font-[Poppins-Regular]">
                  AQAD Support Team
                  </Text>
                </View>
                <View className="flex flex-row items-center gap-x-3">
                  <Text className="p-1.5 bg-blue-100 border border-[#87b1ff] rounded-full">
                    <SvgUri source={message} />
                  </Text>
                  <Text className="p-1.5 bg-[#faebe1] border border-[#fbac74] rounded-full">
                    <SvgUri source={phone} />
                  </Text>
                </View>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card1: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderRadius: 15,
    // marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 10,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
    padding: 10,
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderRadius: 15,
    // marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 60,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
    padding: 10,
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
