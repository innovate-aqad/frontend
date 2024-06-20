import {View, Text} from 'react-native';
import React from 'react';
import { screenBackground } from '../../../constants/Theme';

export default function WhatsAppMessage() {
  return (
    <View className="flex items-center justify-center my-auto" style={{backgroundColor:screenBackground}}>
    <Text className="text-black">WhatsAppMessage</Text>
  </View>
  );
}
