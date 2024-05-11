import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Signup(nav) {
  const redirectVendor = () => {
    nav.navigation.navigate('vendor');
  };
  const redirectLogistic = () => {
    nav.navigation.navigate('logistic');
  };

  return (
    <View>
      <View
        className="flex flex-col px-4 justify-center h-full bg-gray-100 !text-black
    "
        style={{fontFamily: 'Poppins-Bold'}}>
        <TouchableOpacity onPress={() => nav.navigation.navigate('Login')}>
          <Image
            style={styles.topNavigation}
            source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <View>
          <Text
            className="text-3xl text-[#00274D]"
            style={{fontFamily: 'Poppins-bold'}}>
            Get Started As
          </Text>
          <Text
            className="text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Pick the type of account that suits your business or personal needs.
          </Text>
        </View>

        <View className="flex flex-col !pt-5 gap-y-3">
          <TouchableOpacity activeOpacity={0.5} onPress={redirectVendor}>
            <View
              className={
                'flex flex-row items-center w-full p-2 bg-white rounded-lg '
              }>
              <View className="w-[12%] flex flex-row items-center justify-center rounded-full">
                <Image
                  style={styles.tinyLogo}
                  source={require('../Assets/image/vendor.jpeg')}
                />
              </View>
              <View className="w-[88%] px-3">
                <Text
                  className="text-xl text-[#00274D]"
                  style={styles.fontFamily}>
                  Vendor
                </Text>
                <Text className="pt-2 text-xs text-gray-300">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
              <View className="w-[12%] flex flex-row items-center justify-center rounded-full">
                <Image
                  style={styles.tinyLogo}
                  source={require('../Assets/image/retailer.jpeg')}
                />
              </View>
              <View className="w-[88%] px-3">
                <Text
                  className="text-xl text-[#00274D]"
                  style={styles.fontFamily}>
                  Retail
                </Text>
                <Text className="pt-2 text-xs text-gray-300">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={redirectLogistic}>
            <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
              <View className="w-[12%] flex flex-row items-center justify-center rounded-full">
                <Image
                  style={styles.tinyLogo}
                  source={require('../Assets/image/logistic.jpeg')}
                />
              </View>
              <View className="w-[88%] px-3">
                <Text
                  className="text-xl text-[#00274D]"
                  style={styles.fontFamily}>
                  Logistic Partner
                </Text>
                <Text className="pt-2 text-xs text-gray-300">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            indicatorStyle={'green'}
            className="flex flex-row items-center w-full p-2 bg-white rounded-lg"
            activeOpacity={0.5}>
            {/* <View className="flex flex-row items-center w-full p-2 rounded-lg"> */}
            <View className="w-[12%]  flex flex-row items-center justify-center rounded-full">
              <Image
                style={styles.tinyLogo}
                source={require('../Assets/image/employee.jpeg')}
              />
            </View>
            <View className="w-[88%] px-3">
              <Text
                className="text-xl text-[#00274D]"
                style={styles.fontFamily}>
                Employee
              </Text>
              <Text className="pt-2 text-xs text-gray-300">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </Text>
            </View>
            {/* </View> */}
          </TouchableOpacity>
        </View>

        <View className="flex flex-row items-center justify-center mt-8">
          <Text className="text-[#00274D]" style={styles.fontFamily}>
            Already Signed Up ?
          </Text>
          <Text
            className="px-5 text-[#F96900] "
            onPress={() => nav.navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 35,
    height: 35,
    borderRadius: 11.5,
  },
  fontFamily: {
    fontFamily: 'Poppins-medium',
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    marginBottom: 15,
  },
});
