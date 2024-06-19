import {View, Text} from 'react-native';
import React from 'react';
import { screenBackground } from '../../constants/Theme';

export default function FAQ() {
  return (
    <View className="flex items-center justify-center my-auto" style={{backgroundColor:screenBackground}}>
      <Text className="text-black">FAQ</Text>
    </View>
  );
}
