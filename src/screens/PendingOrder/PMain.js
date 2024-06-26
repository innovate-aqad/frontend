import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PendingOrder from '../PendingOrder/PendingOrder';
import PDriverDetails from '../PendingOrder/PDriverDetails';
import {Divider} from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';
import badgeCheck from '../../Assets/image/drawable/badge_check.svg';
import cheapStack from '../../Assets/image/drawable/cheap_stack.svg';
import hourglass from '../../Assets/image/drawable/hourglass_split.svg';
import cross from '../../Assets/image/drawable/circle-cross.svg';

// cheap_stack

export default function Dashboard(nav) {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {};

  const scrollViewRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const scrollWidth = Dimensions.get('window').width;
  let scrollOffset = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollViewRef.current) {
        scrollOffset += scrollWidth; // Adjust this value based on the width of your screen or items
        if (scrollOffset > contentWidth) {
          scrollOffset = 0;
        }
        scrollViewRef.current.scrollTo({x: scrollOffset, animated: true});
      }
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [contentWidth, scrollWidth]);

  return (
    <View className="flex flex-col pb-20">
      <View className="flex flex-row items-center justify-between p-3 px-5 bg-white">
        <View className="">
          <Image
            style={{height: 21, width: 24, tintColor: '#7e84a3'}}
            className=""
            source={require('../../Assets/image/bars-sort.png')}
          />
        </View>
        <View className="flex flex-col items-center gap-x-3">
          <Image
            style={styles.tinyLogo}
            className=""
            source={require('../../Assets/image/omniIcon.jpeg')}
          />

          <Text className="text-[#050605]" style={styles.fontFamily}>
            AL QUTUB Al DHAHABI
          </Text>
        </View>
        <View>
          <Octicons name="bell" size={12} color={'#F96900'} />
          <Text className="absolute text-center flex flex-col justify-center pt-0.2 items-center w-[17px] h-[15px] text-[10px] text-white bg-[#f96900] rounded-full right-1 top-1">
            10
          </Text>
        </View>
      </View>

      <ScrollView keyboardShouldPersistTaps="handled">
        <View className="px-3">
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Search..."
              underlineColorAndroid="transparent"
              value={searchText}
              // textColor='#cbcbcb'
              placeholderTextColor={'#cbcbcb'}
              keyboardType="default"
              disableFullscreenUI={true}
              onChangeText={text => setSearchText(text)}
              onSubmitEditing={handleSearch}
            />

            <TouchableOpacity onPress={handleSearch}>
              <AntDesign name="search1" size={24} color="#cbcbcb" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-col p-2 mt-3 bg-white rounded-lg">
            <Text className="text-[#f96900] text-[8px]">
              Order Status : Out for Delivery
            </Text>
            <View className="flex flex-row justify-between w-full mt-2">
              <View className=" bg-[#f96900] rounded h-1 w-[23%] py-0.5"></View>
              <View className=" bg-[#f96900] rounded h-1 w-[23%] py-0.5"></View>
              <View className=" bg-[#f96900] rounded h-1 py-0.5 w-[23%]"></View>
              <View className=" bg-slate-300 rounded h-1 py-0.5 w-[23%]"></View>
            </View>
            <Text className="text-[#00274d] mt-1 font-[Poppins-Bold]">
              Order Id #2324390
            </Text>
            <View className="flex flex-row justify-between mt-2">
              <View className="flex flex-row">
                <View className="bg-sky-100 border border-sky-200 rounded-lg h-[48px] w-[48px] flex flex-col items-center justify-center">
                  <Image
                    style={{height: 31, width: 34}}
                    className=""
                    source={require('../../Assets/image/drawable-hdpi/mask_group_2.png')}
                  />
                </View>
                <View className="flex flex-col justify-between px-2">
                  <View>
                    <Text className="text-[#5a607f]" style={{fontSize: 10}}>
                      Green Olive Lavendor Scalp Oil
                    </Text>
                    <Text className="text-[#965a607f]" style={{fontSize: 8}}>
                      2 Units
                    </Text>
                  </View>
                  <View className="flex flex-row">
                    <Text className="text-[#7e84a3]" style={{fontSize: 8}}>
                      Order Date :
                    </Text>
                    <Text
                      className="text-[#965a607f] px-1"
                      style={{fontSize: 8}}>
                      May 2 2024
                    </Text>
                  </View>
                </View>
              </View>
              <View className="flex flex-col top-6">
                <Text className="text-[#0058ff]" style={{fontSize: 8}}>
                  Estimated Arrival
                </Text>
                <Text
                  className="text-[#5a607f] float-right text-right"
                  style={{fontSize: 8}}>
                  May 19,2024
                </Text>
              </View>
            </View>
          </View>
        </View>
        <PendingOrder />
        <PDriverDetails />

        <View className="flex flex-row  gap-x-5 p-1 px-2">
          {[
            {
              name: "Today's Orders",
              img: hourglass,
              bgColor: '#FFFAE6',
              borderColor: '#FFE99A',
              height: '20',
              width: '24',
            },
            {
              name: "Today's Travell",
              img: cross,
              bgColor: '#F2F2F6',
              borderColor: '#E6E6EE',
              height: '25',
              width: '25',
            },
          ].map((item, index) => (
            <View
              key={index}
              className="flex flex-row items-center p-5 bg-white rounded-lg shadow">
              <View className="flex flex-col justify-between ">
                <Text
                  className="text-[#5a607f] font-[Poppins-Medium]"
                  style={{fontSize: 13}}>
                  {item.name}
                </Text>
                <Text
                  className="text-black font-[Poppins-SemiBold]"
                  style={{fontSize: 16, letterSpacing: 0.02}}>
                  14570
                </Text>
                <View className="flex flex-row">
                  <Text
                    className="text-green-500 font-[Poppins-SemiBold]"
                    style={{fontSize: 8}}>
                    2.3%
                  </Text>
                  <Text
                    className="text-[#7e84a3] font-[Poppins-SemiBold] px-2"
                    style={{fontSize: 8}}>
                    than last year
                  </Text>
                </View>
              </View>
              <View
                className="border flex flex-col justify-center h-[45px] w-[45px] items-center rounded-full"
                style={{
                  backgroundColor: item.bgColor,
                  borderColor: item.borderColor,
                }}>
                <SvgUri
                  style={{tintColor: 'red'}}
                  width={item.width}
                  height={item.height}
                  source={item.img}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderBottomWidth: 0,
    marginTop: 10,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingRight: 5,
    color: '#cbcbcb',
    borderWidth: 2,
    marginLeft: 5,
  },
  tinyLogo: {
    width: 30.9,
    height: 29.8,
    borderRadius: 11.5,
  },
  fontFamily: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12,
  },
});
