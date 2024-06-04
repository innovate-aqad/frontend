import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {blue, grayColor, screenBackground} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';

export default function CompanyDetail() {
  return (
    <View style={{backgroundColor: screenBackground, margin: 20}}>
      <Text
        style={{fontFamily: ROBOTO.RobotoMedium, fontSize: 20, color: blue}}>
        Business Information
      </Text>
      <View style={{marginVertical: 15}}>
        <View>
          <Text style={styles.heading}>Company Name</Text>
          <Text style={styles.desc}>Runte, Nolan and Marquardt </Text>
        </View>
        <View className="mt-2">
          <Text style={styles.heading}>Designation </Text>
          <Text style={styles.desc}>Product Accounts Engineer </Text>
        </View>
        <View className="mt-2">
          <Text style={styles.heading}>Trade License Number </Text>
            <Text style={styles.desc}>JXHYBZBMU81 <Text className="text-[#21d59b] font-[Poppins-SemiBold] text-[10px]">Verified</Text> </Text>
        </View>
        <View className="mt-2">
          <Text style={styles.heading}>Company Address Line 1 </Text>
          <Text style={styles.desc}>97246 Armstrong Place </Text>
        </View>
        <View className="mt-2">
          <Text style={styles.heading}>Company Address Line 2 </Text>
          <Text style={styles.desc}>97246 Armstrong Place </Text>
        </View>
        <View className="mt-2">
          <Text style={styles.heading}>PO Box </Text>
          <Text style={styles.desc}>93270 </Text>
        </View>
        <View className="mt-2">
          <Text style={styles.heading}>Country </Text>
          <Text style={styles.desc}>United Arab Emirites </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: POPPINS.PoppinsMedium,
    fontSize: 13,
    color: blue,
  },
  desc: {
    color: grayColor,
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 13,
  },
});
