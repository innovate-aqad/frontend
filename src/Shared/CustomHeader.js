import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

export default function CustomHeader({haeding}) {
    const navigation = useNavigation();
  return (
    <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
                height: 15,
                width: 23.3,
                tintColor: 'white',
            }}
            source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: 'Poppins-Bold'}}>
          {haeding ? haeding :"ORDER"}
        </Text>
      </View>
  )
}
