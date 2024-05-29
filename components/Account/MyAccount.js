import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../Contants/theme';
export default function MyAccount(nav) {
  const navigation = useNavigation();
  return (
    <View className="flex flex-col h-full p-5 py-8 bg-[#f5f5f5]">
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-[#00274d]"
          style={{fontFamily: 'Roboto-Bold'}}>
          MY ACCOUNT
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center my-auto">
        <View className="flex items-center justify-center">
          <Image
            style={{}}
            source={require('../../Assets/image/group_480.png')}
          />
        </View>
        <View className="mt-4">
          <Text className="text-[10px] text-[#00274d] px-1 text-center font-[Poppins-Light]">
            Lorem Ipsum is simply dummy text of the printing and industry. Lorem
            Ipsum has been the industry's standard dummy text ever since ever
            since ever since
          </Text>
        </View>

        <View className="flex flex-row justify-between w-full mt-4">
          <TouchableOpacity
            style={styles.btn}
            className="p-3 w-[48%] rounded-full"
            onPress={() => nav.navigation.navigate('Login')}>
            <Text
              className="text-center text-white text-[13px]"
              style={{fontFamily: 'Poppins-Regular'}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#e6e9f4'}}
            className="p-3 w-[48%] rounded-full"
            onPress={() => nav.navigation.navigate('signup')}>
            <Text
              className="text-center text-[13px]"
              style={{fontFamily: 'Poppins-Regular', color: '#00274d'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  btn: {
    color: 'white',
    backgroundColor: COLORS.bottonColor,
  },
});
