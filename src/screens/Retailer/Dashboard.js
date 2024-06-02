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
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Divider} from 'react-native-paper';
import SvgUri from 'react-native-svg-uri';
import badgeCheck from '../../Assets/image/drawable/badge_check.svg';
import cheapStack from '../../Assets/image/drawable/cheap_stack.svg';
import hourglass from '../../Assets/image/drawable/hourglass_split.svg';
import cross from '../../Assets/image/drawable/circle-cross.svg';

const leading_category = [
  {name: 'Fresh Food', percentage: '75%'},
  {name: 'Health & Beauty', percentage: '10%'},
  {name: 'Grocery', percentage: '42%'},
  {name: 'Baby Products', percentage: '10%'},
  {name: 'Beverages', percentage: '25%'},
  {name: 'Household Goods', percentage: '5%'},
  {name: 'Frozen Foods', percentage: '10%'},
  {name: 'Home Appliances', percentage: '2%'},
];

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
        scrollOffset += scrollWidth; 
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

      <ScrollView
        style={{marginBottom: 58}}
        keyboardShouldPersistTaps="handled">
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
                  {' '}
                  May 19,2024
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="mt-2">
          <Text className="text-[#00274d]  px-3 font-[Poppins-Bold]">
            Low Stocks
          </Text>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            className="pl-2"
            showsHorizontalScrollIndicator={false}
            onContentSizeChange={width => setContentWidth(width)}
            style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <View
                key={index}
                className="flex flex-col mr-2 bg-white rounded-lg shadow p-1.5">
                <Image
                  style={{height: 90, width: 90}}
                  className=""
                  source={require('../../Assets/image/drawable-hdpi/mask_group_2.png')}
                />
                <Text
                  className="text-[#7e84a3] text-center"
                  style={{fontSize: 8}}>
                  Product Name...
                </Text>
                <Text
                  className="text-[#f0142f] text-center"
                  style={{fontSize: 8}}>
                  Avail Unit : 15 / 100
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="mt-2">
          <Text className="text-[#00274d] px-3 font-[Poppins-Bold]">
            Recent Stock
          </Text>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            onContentSizeChange={width => setContentWidth(width)}
            style={{flexDirection: 'row', marginTop: 10, gap: 8}}>
            {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: 8,
                  backgroundColor: 'white',
                  borderRadius: 12,
                  shadowColor: '#000',
                  shadowOpacity: 0.1,
                  shadowOffset: {width: 0, height: 1},
                  shadowRadius: 2,
                  marginRight: 10,
                }}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#f5c4b3',
                    borderRadius: 50,
                    overflow: 'hidden',
                  }}>
                  <Image
                    style={{height: 46, width: 46, borderRadius: 23}}
                    source={require('../../Assets/image/drawable-hdpi/mask_group_2.png')}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingLeft: 8,
                  }}>
                  <Text style={{color: '#7e84a3', fontSize: 13}}>
                    Product Name
                  </Text>
                  <View style={{flexDirection: 'column', marginTop: 4}}>
                    <Text style={{color: '#7e84a3', fontSize: 8}}>
                      Previous Stock : 15
                    </Text>
                    <Text style={{color: '#7e84a3', fontSize: 8}}>
                      Current Stock : 100
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View className="px-3">
          <View className="mt-2">
            <Text className="text-[#00274d] font-[Poppins-Bold]">
              Key Performance Inputs (KPI's)
            </Text>
            <View className="flex flex-row justify-between mt-1 gap-x-2">
              {[
                {
                  name: 'Order Placed',
                  img: badgeCheck,
                  bgColor: '#E9FBF5',
                  borderColor: '#DAF0F6',
                  height: '20',
                  width: '24',
                },
                {
                  name: 'Low Inventory',
                  img: cheapStack,
                  bgColor: '#FDDCE0',
                  borderColor: '#E6E6EE',
                  height: '18',
                  width: '18',
                },
              ].map((item, index) => (
                <View
                  key={index}
                  className="flex flex-row items-center p-2 bg-white rounded-lg shadow">
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
                    className="border flex ml-2.5 flex-col justify-center h-[45px] w-[45px] items-center rounded-full"
                    style={{
                      backgroundColor: item.bgColor,
                      borderColor: item.borderColor,
                    }}>
                    <SvgUri
                      width={item.width}
                      height={item.height}
                      source={item.img}
                    />
                  </View>
                </View>
              ))}
            </View>
            <View className="flex flex-row justify-between mt-3 gap-x-2">
              {[
                {
                  name: 'Pending Orders',
                  img: hourglass,
                  bgColor: '#FFFAE6',
                  borderColor: '#FFE99A',
                  height: '20',
                  width: '24',
                },
                {
                  name: 'Cancell Orders',
                  img: cross,
                  bgColor: '#F2F2F6',
                  borderColor: '#E6E6EE',
                  height: '25',
                  width: '25',
                },
              ].map((item, index) => (
                <View
                  key={index}
                  className="flex flex-row items-center p-2 bg-white rounded-lg shadow">
                  <View className="flex flex-col justify-between ">
                    <Text
                      className="text-[#5a607f] font-[Poppins-Medium]"
                      style={{fontSize: 10}}>
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
                      {
                        index===0 ?
                        <SvgUri
                      style={{tintColor: 'red'}}
                      width={item.width}
                      height={item.height}
                      source={item.img}
                    />
                      :
                    
                    <EvilIcons  name="close-o" size={33} color={'#cbcbcb'}/>
                      }
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View className="p-2 my-3 bg-white rounded-lg shadow-lg">
            <Text className="font-[Poppins-Bold] text-[#00274d]">
              Leading Category
            </Text>
            <Divider style={{backgroundColor: '#e6e9f4', marginVertical: 4}} />

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 14,
              }}>
              {leading_category?.map((item, index) => (
                <View
                  key={index}
                  className="w-[47%] flex flex-row items-center justify-between">
                  <Text
                    className={'text-[#131523] text-[10px] font-[Poppins-Regular]'}
                   >
                    {item.name}
                  </Text>
                  <Text className={'text-[#131523] text-[10px] font-[Poppins-Bold]'}>
                    {item.percentage}
                  </Text>
                </View>
              ))}
            </View>
          </View>
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
