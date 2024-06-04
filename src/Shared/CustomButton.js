import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {btnBackround, white} from '../constants/Theme';
import {ROBOTO} from '../constants/CustomFontFamily';

export default function CustomButton({onPress, text}) {
  return (
    <TouchableOpacity
      className="w-full rounded-xl"
      onPress={onPress}
      style={{
        backgroundColor: btnBackround,
        padding: 12,
        alignItems: 'center',
        color: 'red',
      }}>
      <Text style={{fontFamily: ROBOTO.RobotoRegular,color:white,fontSize:20}}>
        {text ? text : 'ADD PRODUCT'}
      </Text>
    </TouchableOpacity>
  );
}
