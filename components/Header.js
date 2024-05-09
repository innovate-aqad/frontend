import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

// Octicons

export default function Header() {
  return (
    <View className="flex flex-row items-center justify-between p-3 px-8 bg-white">
      <View className="flex flex-row items-center gap-x-3">
        <Image
          style={styles.tinyLogo}
          className=""
          source={require('../Assets/image/omniIcon.jpeg')}
        />

        <Text className="text-black" style={styles.fontFamily}>
          AL QUTUB Al DHAHABI
        </Text>
      </View>
      <View>
          <Octicons name="bell" size={12.5} color={'#F96900'} />
          <Text className="absolute text-center flex flex-col justify-center pt-0.2 items-center w-[17px] h-[15px] text-[10px] text-white bg-[#f96900] rounded-full right-1 top-1">10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 11.5,
  },
  fontFamily: {
    fontFamily: 'Poppins-Bold',
    fontSize: 12
  },
});
