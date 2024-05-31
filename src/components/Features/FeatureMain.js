import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import {
  blue,
  flexTradButtonColor,
  screenBackground,
  textColorCustom,
  white,
} from '../../constants/Theme';
import RetailFeatures from './RetailFeatures';
import VendorFeatures from './VendorFeatures';

export default function FeatureMain() {
  const [value, setValue] = React.useState('left');
  return (
    <View
      className="flex flex-col h-full p-5 py-8 mb-20 gap-y-2"
      style={{backgroundColor: screenBackground}}>
      <View className="flex flex-row w-full bg-white rounded-full ">
        <TouchableOpacity
          onPress={() => setValue('left')}
          className="w-[50%] h-[39px]"
          //  style={styles.button}

          style={[
            styles.button,
            value === 'left' && styles.selectedToggleButton,
          ]}>
          <Text
            style={[
              value === 'left' ? {color: white} : {color: flexTradButtonColor},
              {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
            ]}>
            Vendor
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
            style={[
              value === 'right' ? {color: white} : {color: flexTradButtonColor},
              {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
            ]}>
            Retailer
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-0">
        <Text
          style={{
            fontFamily: ROBOTO.RobotoBold,
            color: blue,
            marginVertical: 10,
            marginTop: 12,
            marginLeft: 4,
          }}>
          Highlights
        </Text>
      </View>
      {value === 'left' ? <VendorFeatures /> : <RetailFeatures />}
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
  },

  button: {
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
    color: 'white',
  },
});
