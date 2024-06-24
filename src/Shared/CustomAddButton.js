import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function CustomAddButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="w-24 p-2 text-center bg-[#f96900] items-center justify-center flex flex-row rounded-[5px] mt-2">
        <MaterialIcons name="add" size={18} color="white" />
        <Text className="ml-2 text-center text-white font-[Roboto-Regular] text-[12px]">
          Add
        </Text>
      </View>
    </TouchableOpacity>
  );
}


