import React from 'react';
import {Image, Text, View} from 'react-native';
import {blue} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';

export default function PassChangeSuccess() {
  return (
    <View className="flex items-center h-full justify-center">
      <Image
        style={{height: 100, width: 100}}
        source={require('../../Assets/image/settings/success.png')}
      />
      <Text
        style={{
          color: blue,
          fontFamily: ROBOTO.RobotoMedium,
          fontSize: 20,
          marginTop: 7,
        }}>
        Password Successfully Changed
      </Text>
      <Text
        style={{
          color: blue,
          fontFamily: POPPINS.PoppinsLight,
          fontSize: 10,
          textAlign:"center"
        }}>
        Thymbra praesentium vergo articulus ventito textilis adulatio commemoro deserunt peccatus.
      </Text>
    </View>
  );
}
