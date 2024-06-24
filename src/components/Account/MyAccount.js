import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomStyle from '../../Styles';
import {
  blue,
  btnBackround,
  screenBackground,
  white,
} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import TermCondition from '../../Shared/TermCondition';
import { success } from '../../constants/ToastMessage';
export default function MyAccount(nav) {
  const navigation = useNavigation();

  const showPopupMEssage=()=>{
    success({text:"hello boy this message",type:"success"})
  }
  return (
    <View
      className="flex flex-col h-full p-5 py-8"
      style={{backgroundColor: screenBackground}}>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={CustomStyle.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center"
          style={{fontFamily: ROBOTO.RobotoBold, color: blue}}>
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
          <Text
            className="text-[10px] px-1 text-center"
            style={{fontFamily: POPPINS.PoppinsLight, color: blue}}>
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
              className="text-center text-[13px]"
              style={{fontFamily: POPPINS.PoppinsRegular, color: white}}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#e6e9f4'}}
            className="p-3 w-[48%] rounded-full"
            onPress={() => {
              nav.navigation.navigate('VendorDrawer');
              // navigation.replace('productFilter')
             } }>
            <Text
              className="text-center text-[13px]"
              style={{fontFamily: POPPINS.PoppinsRegular, color: blue}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <TermCondition/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },
  btn: {
    color: white,
    backgroundColor: btnBackround,
  },
}); 
