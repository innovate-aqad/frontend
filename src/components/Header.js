import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { blue, flexTradButtonColor, grayColor } from '../constants/Theme';
import { POPPINS } from '../constants/CustomFontFamily';

export default function Header({navigation}) {
  console.log(navigation,"navigationnavigation====>");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          style={{height: 21, width: 24,tintColor:flexTradButtonColor}}
          className=""
          source={require('../Assets/image/bars-sort.png')}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Image
          style={styles.tinyLogo}
          source={require('../Assets/image/omniIcon.jpeg')}
        />
        <Text className="text-[#050605]" style={styles.fontFamily}>AL QUTUB Al DHAHABI</Text>
      </View>
      <TouchableOpacity>
        <Octicons name="bell" size={12.5} color={blue} />
        <Text className="absolute text-center flex flex-col justify-center pt-0.2 items-center w-[17px] h-[15px] text-[10px] text-white bg-[#f96900] rounded-full right-1 top-1">
          10
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
  },
  menuIcon: {
    height: 21,
    width: 24,
    tintColor: '#7e84a3',
  },
  titleContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    color:grayColor
  },
  tinyLogo: {
    width: 30.9,
    height: 29.8,
    borderRadius: 11.5,
  },
  fontFamily: {
    fontFamily: POPPINS.PoppinsBold,
    fontSize: 12,
    color: '#050605',
  },
  notificationContainer: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#f96900',
    color: 'white',
    borderRadius: 7.5,
    width: 17,
    height: 15,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 15,
  },
});
