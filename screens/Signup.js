import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Signup(nav) {
  return (
    <View
      className="flex flex-col p-4 justify-center h-full bg-gray-100 !text-black
    "
      style={{fontFamily: 'Poppins-Bold'}}>
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
        <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
          <View className="w-[12%]  bg-red-300 px-1 flex flex-row items-center justify-center py-2 rounded-full">
            <Ionicons name="finger-print-outline" color={'black'} size={22} />
          </View>
          <View className="w-[88%] px-3">
            <Text className="text-xl text-[#00274D]">Vendor</Text>
            <Text className="pt-2 text-xs text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
          <View className="w-[12%]  bg-green-200 px-1 flex flex-row items-center justify-center py-2 rounded-full">
            <AntDesign name="meho" color={'green'} size={22} />
          </View>
          <View className="w-[88%] px-3">
            <Text className="text-xl text-[#00274D]">Retail</Text>
            <Text className="pt-2 text-xs text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
          <View className="w-[12%]  bg-yellow-100 px-1 flex flex-row items-center justify-center py-2 rounded-full">
            <AntDesign name="circledown" color={'yellow'} size={22} />
          </View>
          <View className="w-[88%] px-3">
            <Text className="text-xl text-[#00274D]">Logistic Partner</Text>
            <Text className="pt-2 text-xs text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </View>
        </View>
        <View className="flex flex-row items-center w-full p-2 bg-white rounded-lg">
          <View className="w-[12%]  bg-pink-100 px-1 flex flex-row items-center justify-center py-2 rounded-full">
            <AntDesign name="chrome" color={'pink'} size={22} />
          </View>
          <View className="w-[88%] px-3">
            <Text className="text-xl text-[#00274D]">Employee</Text>
            <Text className="pt-2 text-xs text-gray-300">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </Text>
          </View>
        </View>
        
      </View>

      <View className="flex flex-row items-center justify-center mt-8">
        <Text className="text-[#00274D]">Already Signed Up ?</Text>
        <Text
          className="px-5 text-[#F96900] "
          onPress={() => nav.navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
