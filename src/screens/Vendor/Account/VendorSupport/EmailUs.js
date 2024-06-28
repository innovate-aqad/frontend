import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ROBOTO} from '../../../../constants/CustomFontFamily';
import {
  flexTradButtonColor,
  screenBackground,
  textColorCustom,
  white,
} from '../../../../constants/Theme';
import Request from './Request';
import History from './History';
import { useNavigation } from '@react-navigation/native';
// import styles from '../../../../Shared/ProductDrawer/styles'

export default function EmailUs() {
  const [value, setValue] = React.useState('left');
  const navigation=useNavigation()
  return (
    <View style={{backgroundColor:screenBackground}}>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          EMAIL US
        </Text>
      </View>
      <View className="m-4">
      <View className="flex flex-row w-full bg-white rounded-full ">
        <TouchableOpacity
          onPress={() => setValue('left')}
          className="w-[50%] h-[39px]"
          style={[
            styles.button,
            value === 'left' && styles.selectedToggleButton,
          ]}>
          <Text
            style={[
              value === 'left' ? {color: white} : {color: flexTradButtonColor},
              {fontFamily: ROBOTO.RobotoRegular, fontSize: 14},
            ]}>
            Request
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
            History
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {
          value=="left" ? <Request/> :<History/>
        }
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    tintColor: 'white',
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
    backgroundColor: textColorCustom,
    borderColor: textColorCustom,
    color: 'white',
  },
});
