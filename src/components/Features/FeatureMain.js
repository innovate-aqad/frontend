import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ROBOTO} from '../../constants/CustomFontFamily';
import {
  blue,
  btnBackround,
  flexTradButtonColor,
  screenBackground,
  white,
} from '../../constants/Theme';
import RetailFeatures from './RetailFeatures';
import VendorFeatures from './VendorFeatures';
import CustomStyle from '../../Styles';

// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FeatureMain() {
  const [value, setValue] = React.useState('left');
  return (
    <View
      className="flex flex-col h-full p-5 py-8 mb-20 gap-y-2"
      style={{backgroundColor: screenBackground, height:windowHeight-75}}>
      <View className="flex flex-row w-full bg-white rounded-full ">
        <TouchableOpacity
          onPress={() => setValue('left')}
          className="w-[50%] h-[39px]"
          style={[
            CustomStyle.invactiveButton,
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
            CustomStyle.invactiveButton,
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
  selectedToggleButton: {
    backgroundColor: btnBackround,
    borderColor: btnBackround,
    color: white,
  },
});
