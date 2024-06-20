import {View, Text} from 'react-native';
import React from 'react';
import { screenBackground } from '../../../constants/Theme';

export default function Technical() {
  return (
    <View className="flex items-center justify-center my-auto" style={{backgroundColor:screenBackground}}>
      <Text className="text-black">Technical</Text>
    </View>
  );
}
