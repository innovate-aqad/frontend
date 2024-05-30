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
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Wholesales(nav) {
  const [searchText, setSearchText] = useState('');
  const [tab, setTab] = useState('All');
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

  const tabNavigatePage = value => {
    console.log(value, 'ramsasalsklaalskfalk');
    if (value === 'Top Sales') {
      setTab('Top Sales');
    } else if (value === 'Features') {
      setTab('Features');
    } else if (value === 'Popular') {
      setTab('Popular');
    } else {
      setTab('All');
    }
  };

  const showMenu = index => {
    if (show === index) {
      setShow();
    } else {
      setShow(index);
    }
  };



  return (
    <View className="w-full h-full bg-[#f5f5f5]">
      {/* <View className="relative top-0 flex flex-row items-center px-5 pt-7 pb-2 bg-[#f96900] rounded-b-[15px]">
        <Image
          style={styles.topNavigation}
          source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
        <Text
          className="flex justify-center w-[80%] text-center text-white"
          style={{fontFamily: 'Poppins-Bold', fontSize: 20}}>
          WHOLESALES
        </Text>
      </View> */}
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
      </View>

      <View className="mt-3">
        <TouchableOpacity>
          <Text className="text-[#00274d]  px-3 font-[Poppins-Bold]">
            Categories
          </Text>
        </TouchableOpacity>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          className="pl-2"
          showsHorizontalScrollIndicator={false}
          onContentSizeChange={width => setContentWidth(width)}
          style={{flexDirection: 'row', marginTop: 8, gap: 8}}>
          {[
            {name: 'Fresh Food'},
            {name: 'Grocery'},
            {name: 'Beverages'},
            {name: 'Frozen Food'},
            {name: 'Health andBeauty'},
            {name: 'Grocery'},
            {name: 'Grocery'},
            {name: 'Grocery'},
          ].map((item, index) => (
            <View key={index}>
              <View className="flex flex-col mr-2 bg-white rounded-lg shadow p-1.5">
                <Image
                  style={{height: 74, width: 74}}
                  className=""
                  source={require('../../../Assets/image/drawable-hdpi/mask_group_2.png')}
                />
              </View>
              <Text
                className="pt-1 text-center"
                style={{
                  fontFamily: 'Poppins-Regular',
                  color: '#00274d',
                  fontSize: 10,
                }}>
                {item.name}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <Divider className="bg-[#e6e9f4] m-3" />

      <View className="flex flex-row justify-around px-3 gap-x-3">
        {[
          {name: 'All'},
          {name: 'Top Sales'},
          {name: 'Features'},
          {name: 'Popular'},
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => tabNavigatePage(item.name)}
            className={
              tab == item.name
                ? 'bg-[#f96900] p-1.5 px-3 rounded-lg w-[82px]'
                : 'bg-[#ffffff] p-1.5 px-3 rounded-lg w-[82px]'
            }>
            <Text
              className={
                tab == item.name
                  ? 'text-white text-[12px] text-center'
                  : 'text-[#00274d] text-[12px] text-center'
              }
              style={{fontFamily: 'Poppins-Regular'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView className="">
        <View
          className="p-3 mb-20"
          style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', gap: 14}}>
          {[
            {heading: 'Popular Products'},
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
            {
              brand: 'Nice',
              dec: 'Considero casus adduco....',
              price: '150 AED',
            },
          ].map((item, index) => (
            <View
              key={index}
              className={
                index === 0
                  ? 'h-12'
                  : 'flex flex-col bg-white shadow rounded-[12px]'
              }>
              {index === 0 ? (
                <View className="w-40 h-20 mt-2">
                  <Text
                    className="text-[#f96900] text-[20px] font-[Poppins-Bold]"
                    style={{lineHeight: 23}}>
                    Populars
                  </Text>
                  <Text
                    className="text-[#f96900] text-[20px] font-[Poppins-Bold]"
                    style={{lineHeight: 23}}>
                    Products
                  </Text>
                </View>
              ) : (
                <TouchableOpacity onPress={()=>{nav.navigation.navigate('productDetails')}}>
                  <Image
                    style={{
                      height: 115,
                      width: 160,
                      borderTopRightRadius: 12,
                      borderTopLeftRadius: 12,
                    }}
                    className=""
                    source={require('../../../Assets/image/drawable-hdpi/mask_group_2.png')}
                  />
                  <View className="flex flex-col pt-2 after:pl-2">
                    <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                      {item.brand}
                    </Text>
                    <Text className="text-[#00274d] text-[10px] font-[Poppins-Regular]">
                      {item.dec}
                    </Text>
                    <Text className="text-[#f96900] text-[13px] font-[Poppins-SemiBold]">
                      {item.price}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
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
    // marginHorizontal: 10,
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
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
});
