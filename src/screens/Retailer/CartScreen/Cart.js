import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Divider} from 'react-native-paper';

export default function Cart(nav) {
  const [value, setValue] = React.useState('left');
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
          MY CART
        </Text>
      </View> */}
      <View className="p-4">
        <View className="flex flex-row w-full bg-gray-200 rounded-full">
          <TouchableOpacity
            onPress={() => setValue('left')}
            className="w-[50%] h-[39px]"
            //  style={styles.button}

            style={[
              styles.button,
              value === 'left' && styles.selectedToggleButton,
            ]}>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              All (4)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[50%] h-[39px]"
            onPress={() => setValue('right')}
            style={[
              styles.button1,
              value === 'right' && styles.selectedToggleButton,
            ]}>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-SemiBold', fontSize: 14}}>
              History
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mt-3">
          <Text className="text-[#00274d] font-[Poppins-Bold]">My Orders</Text>
        </View>
        <View className="mt-3">
          {[1, 2, 3]?.map((item, index) => {
            return (
              <View
                key={index}
                className="flex flex-row w-full  mt-1.5 bg-white shadow rounded-xl">
                <View className="w-[25%]">
                  <Image
                    style={{height: 80, width: 80}}
                    source={require('../../../Assets/image/drawable-xhdpi/mask_group_2.png')}
                  />
                </View>
                <View className="flex w-[75%]  flex-row items-center justify-around">
                  <View className="flex flex-col justify-between">
                    <View className="flex flex-col">
                      <Text
                        className="text-[#5a607f]"
                        style={{fontFamily: 'Poppins-Bold', fontSize: 12}}>
                        Product name {index}
                      </Text>
                      <Text
                        className="text-[#92939c] relative top-[-3px] w-[55px]"
                        style={{fontFamily: 'Poppins-SemiBold', fontSize: 8}}>
                        Milk
                      </Text>
                    </View>
                    <View className="flex flex-row items-center gap-x-1.5 ">
                      <TouchableOpacity className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full">
                        <Text className="text-[#f9e4d5] ">
                          <Entypo name="minus" size={14} color="#f96900" />
                        </Text>
                      </TouchableOpacity>
                      <Text className="text-[#00274d] text-[15px]">3</Text>
                      <TouchableOpacity className="bg-[#f7dcc8] h-[18px] w-[18px] flex items-center justify-center rounded-full">
                        <Text className="text-[#f9e4d5] ">
                          <Entypo name="plus" size={14} color="#f96900" />
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View>
                    <Text
                      className="text-[#f96900] pb-3 text-[13px]"
                      style={{fontFamily: 'Poppins-Medium'}}>
                      1250 AED
                    </Text>
                  </View>
                  <View>
                    <Entypo
                      name="dots-three-vertical"
                      size={20}
                      color="#cbcbcb"
                    />
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <Divider className="text-[#dcdcdf] my-4" />

        <View className="">
          <Text className="text-[#00274d] font-[Poppins-Bold]">
            Order Summary
          </Text>

          <View>
            <View className="flex flex-row justify-between">
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                Subtotal (4)
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                5000 AED
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                VAT & Fees
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                5000 AED
              </Text>
            </View>
            <View className="flex flex-row justify-between">
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                Discount
              </Text>
              <Text
                className="text-[#7e84a3] text-[13px]"
                style={{letterSpacing: 0.08}}>
                5000 AED
              </Text>
            </View>
          </View>
        </View>
        <Divider className="text-[#dcdcdf] my-4" />
        <View className="flex flex-row justify-between">
          <Text className="text-[#f96900] text[20px] font-[Poppins-Medium]">
            TOTAL
          </Text>
          <Text className="text-[#f96900] text[20px] font-[Poppins-Medium]">
            4900 AED
          </Text>
        </View>

        <TouchableOpacity
          className="z-50 mt-10 rounded-xl "
          onPress={() => nav.navigation.navigate('checkout')}
          style={styles.button}>
          <Text className="text-white" style={{fontFamily: 'Poppins-SemiBold'}}>
            CHECK OUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
  },
  button: {
    // backgroundColor: '#F96900',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  button1: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 30,
    alignItems: 'center',
    color: 'red',
  },
  selectedToggleButton: {
    backgroundColor: '#F96900',
    borderColor: '#F96900',
  },
});
