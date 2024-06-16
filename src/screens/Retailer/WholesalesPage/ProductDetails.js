import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import marker from '../../../Assets/image/myaccount/marker_1.svg';
import addToCart from '../../../Assets/image/drawable/cartI.svg';

const mockData = ['UK1', 'UK2', 'UK3', 'UK4', 'UK5'];

export default function ProductDetails(nav) {
  const mainId = nav.route.params.id;
  const [size, setSize] = useState([]);

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

  const handleSelect = index => {
    if (size.includes(index)) {
      setSize(size.filter(item => item !== index));
    } else {
      setSize([...size, index]);
    }
  };
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View className="w-full flex flex-col mb-20 h-full bg-[#f5f5f5]">
        <Image
          style={{
            height: 310,
            width: '100%',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          className="shadow-xl "
          source={require('../../../Assets/image/shoess.jpg')}
        />
        <View className="px-4 pt-4">
          <View className="flex flex-row justify-between mt-3">
            <View className="flex flex-col">
              <Text
                className="font-[Poppins-SemiBold] w-3/2 text-[#00274d]"
                style={{lineHeight: 25, letterSpacing: 0.13, fontSize: 20}}>
                Nike SB Dunk Low
              </Text>
              <Text
                className="text-[#7e84a3]"
                style={{lineHeight: 20, fontSize: 13, letterSpacing: 0.08}}>
                Nike Shoes - Black (WHK-237895)
              </Text>
            </View>
            <View className="flex flex-row justify-center mt-2 gap-x-1">
              <Text className="text-[#f96900] text-[10px] font-[Poppins-Medium]">
                4.5
              </Text>
              <FontAwesome name="star" size={11} color="#ffd500" />
              <FontAwesome name="star" size={11} color="#ffd500" />
              <FontAwesome name="star" size={11} color="#ffd500" />
              <FontAwesome name="star" size={11} color="#ffd500" />
              <FontAwesome name="star-half" size={11} color="#ffd500" />
            </View>
          </View>
          <View className="flex flex-col my-2">
            <View className="flex flex-row items-center">
              <Text className="text-[#f96900] font-[Poppins-SemiBold] text-[20px]">
                45
              </Text>
              <Text className="text-[#f96900] font-[Poppins-SemiBold] text-[8px]">
                AED
              </Text>
            </View>
            <Text
              className="text-[#7e84a3] text-[10px] relative top-[-10px] font-[Poppins-Regular]"
              style={{letterSpacing: 0.06}}>
              Price Per Unit
            </Text>
            <Text
              className="text-[#7e84a3] text-[13px] relative top-[-12px] font-[Poppins-Regular]"
              style={{letterSpacing: 0.06}}>
              Minimum Order Qty : 50 Unit
            </Text>
          </View>
          <View className="flex flex-col">
            <View className="flex flex-row items-center justify-between">
              <View className="flex flex-row">
                <Text
                  className="text-[#00274d]"
                  style={{fontFamily: 'Poppins-Bold'}}>
                  Color :
                </Text>
                <Text
                  className="text-[#00274d]"
                  style={{fontFamily: 'Poppins-Regular'}}>
                  Black
                </Text>
              </View>
              <Text
                className="text-[#7e84a3] text-[10px]"
                style={{fontFamily: 'Poppins-Regular'}}>
                Available Color : 4
              </Text>
            </View>
            <View className="flex flex-row items-center gap-x-3">
              <View className="p-1 border rounded-full">
                <View className="w-1 h-1 p-2 bg-[#3c3f3e] rounded-full shadow-xl shadow-gray-400"></View>
              </View>
              <View className="w-1 h-1 p-2 bg-white rounded-full shadow-xl shadow-gray-400"></View>
              <View className="w-1 h-1 p-2 bg-[#f0142f] rounded-full shadow-xl shadow-gray-400"></View>
              <View className="w-1 h-1 p-2 bg-[#0058ff] rounded-full shadow-xl shadow-gray-400"></View>
            </View>
            <View className="flex flex-row items-center justify-between"></View>
          </View>
          <View className="flex flex-row items-center justify-between mt-3">
            <Text
              className="text-[#00274d]"
              style={{fontFamily: 'Poppins-Bold'}}>
              Sizes
            </Text>
            <View className="flex flex-row items-center gap-x-1">
              <Text
                className="text-[#f96900]"
                style={{fontFamily: 'Poppins-Regular', fontSize: 10}}>
                Size Guide
              </Text>
              <View className="px-[8.5px] text-center items-center flex justify-center  bg-gray-300 rounded-full">
                <Text
                  className="text-[#f96900] relative top-[1px] flex items-center justify-center"
                  style={{fontFamily: 'Poppins-Bold', fontSize: 13}}>
                  !
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row justify-around mt-1.5">
            {mockData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelect(index)}
                className={
                  size.includes(index)
                    ? ' w-14 text-center py-2 bg-[#f96900] text-white rounded-lg'
                    : ' w-14 text-center py-2 border border-[#7e84a3] bg-white rounded-lg'
                }>
                <Text
                  className={
                    size.includes(index)
                      ? 'text-white text-center'
                      : 'text-[#cbcbcb] text-center'
                  }>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View className="my-3">
            <Text
              className="text-[#00274d]"
              style={{fontFamily: 'Roboto-Bold'}}>
              Product Details
            </Text>
            <View className="mt-1.5">
              <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              <View className="flex flex-row items-center gap-x-2 ">
                <View className="w-1.5 h-1.5 bg-[#7e84a3] rounded-full"></View>
                <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                  Lorem Ipsum is simply dummy text
                </Text>
              </View>
              <View className="flex flex-row items-center gap-x-2 ">
                <View className="w-1.5 h-1.5 bg-[#7e84a3] rounded-full"></View>
                <Text className="text-[#7e84a3] text-[10px] font-[Poppins-Light]">
                  Lorem Ipsum is simply dummy text of the printing
                </Text>
              </View>
            </View>

            <View className="p-2 mt-2">
              <View className="flex flex-row items-center">
                <View className="w-[10%]">
                  <SvgUri width={24} height={24} source={marker} />
                </View>
                <View className="w-[90%]">
                  <View className="flex flex-col justify-center">
                    <Text
                      className="text-[#00274d] font-[Poppins-Regular] text-[13px]"
                      style={{letterSpacing: 0.08}}>
                      Deliver to Lorem Ipsum
                    </Text>
                    <Text
                      className="text-[#7e84a3] font-[Poppins-Light] text-[10px]"
                      style={{letterSpacing: 0.08}}>
                      Shipping is negotiable. Contact vendor for more
                      information
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text className="text-[#00274d]  px-3 font-[Poppins-Bold]">
            Related Products
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
                className="flex flex-col mr-2  bg-white rounded-lg shadow shadow-gray-400 p-1.5">
                <Image
                  style={{height: 114, width: 140}}
                  className=""
                  source={require('../../../Assets/image/drawable-hdpi/mask_group_2.png')}
                />
                <Text
                  className="text-[#7e84a3] pl-2 font-[Poppins-SemiBold] text-[8px]"
                  style={{fontSize: 8}}>
                  Metal Refined Soft Cheese
                </Text>
                <Text
                  className="text-[#f0142f] pl-2 font-[Poppins-SemiBold] "
                  style={{fontSize: 10}}>
                  54 AED
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View className="flex flex-row items-center justify-between w-full px-4 mt-5">
          <View className="w-[20%] border flex border-[#7e84a3] items-center text-center p-1.5 rounded-lg">
            <MaterialIcons name="add-shopping-cart" size={30} color="#7e84a3" />
          </View>

          <TouchableOpacity
            className="z-50 w-[75%] rounded-xl "
            style={styles.button}>
            <Text
              className="text-white text-[20px]"
              style={{fontFamily: 'Roboto-Regular'}}>
              BUY NOW
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
});
