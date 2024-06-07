import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { blue, flexTradButtonColor } from '../constants/Theme';
import { POPPINS } from '../constants/CustomFontFamily';

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between p-3 px-5 bg-white">
      <View className="">
        <Image
          style={{height: 21, width: 24,tintColor:flexTradButtonColor}}
          className=""
          source={require('../Assets/image/bars-sort.png')}
        />
        {/* <DrawerHome/> */}
      </View>
      <View className="flex flex-col items-center gap-x-3">
        <Image
          style={styles.tinyLogo}
          className=""
          source={require('../Assets/image/omniIcon.jpeg')}
        />

        <Text className="text-[#050605]" style={styles.fontFamily}>
          AL QUTUB Al DHAHABI
        </Text>
      </View>
      <View>
        <Octicons name="bell" size={12.5} color={blue} />
        <Text className="absolute text-center flex flex-col justify-center pt-0.2 items-center w-[17px] h-[15px] text-[10px] text-white bg-[#f96900] rounded-full right-1 top-1">
          10
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 30.9,
    height: 29.8,
    borderRadius: 11.5,
  },
  fontFamily: {
    fontFamily: POPPINS.PoppinsBold,
    fontSize: 12,
  },
});
