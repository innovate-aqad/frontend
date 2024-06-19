import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SvgUri from 'react-native-svg-uri';
// import inventory from '../../../Assets/image/vendor/inventory.svg';
import {
  blue,
  screenBackground,
  textColorCustom,
} from '../../../constants/Theme';
import {POPPINS} from '../../../constants/CustomFontFamily';
import CustomButton from '../../../Shared/CustomButton';

// c:\Users\RAM\Downloads\drawable\inventory.svg

export default function InventoryManagement(nav) {
  return (
    <View className="flex flex-col" style={{backgroundColor: screenBackground}}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 15, width: 23.3, tintColor: 'white'}}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          INVENTORY MANAGEMENT
        </Text>
      </View>
      <View className="flex flex-col items-center justify-center px-4 gap-y-3 mt-28 ">
        <Image
          style={{height: 318.6, width: 270.1}}
          source={require('../../../Assets/image/vendor/inventory.png')}
        />
        <Text
          style={{
            fontFamily: POPPINS.PoppinsLight,
            paddingHorizontal: 20,
            fontSize: 10,
            color: blue,
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>
      </View>
      <View className="relative w-full px-4 top-20">
        <CustomButton text={"ADD USER"} onPress={()=>nav.navigation.navigate('addUserInfo')} />
      </View>
    </View>
  );
}
