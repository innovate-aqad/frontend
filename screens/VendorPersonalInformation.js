import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function VendorPersonalInformation() {
  return (
    <View className="bg-[#f5f5f5] flex flex-col gap-y-3 p-4 h-full">
      <View className="pt-4">
      <Image
          style={styles.topNavigation}
          source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
        />
      </View>
      <Text className="" style={styles.heading}>Vendor Info</Text>
    </View>
  );
}


const styles=StyleSheet.create({
    topNavigation: {
        height: 15,
        width: 23.3,
      },
      heading:{
        fontFamily:"Roboto-Bold",
        fontSize:33,
        color:"#00274d"
      }
})