import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomStyle from '../../Styles';
import {blue, white} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import InputTextField from '../InputTextField';
import CustomButton from '../CustomButton';

export default function ChangePassword(nav) {
  const navigation = useNavigation();
  return (
    <View>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[CustomStyle.topNavigation, {tintColor: white}]}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: ROBOTO.RobotoBold, letterSpacing: 1}}>
          CHANGE PASSWORD
        </Text>
      </View>
      <View className="flex flex-row items-center justify-center mt-10 mb-5">
        <Image
          style={styles.phoneIage}
          source={require('../../Assets/image/settings/smartphone.png')}
        />
      </View>
      <View>
        <Text style={styles.verify}>Verify Your Account</Text>
        <Text style={styles.verifyDesc}>
          Enter email or phone number to verify your account
        </Text>
      </View>
      <View className="m-4 mt-12">
        <View className="mb-7">
          <Text style={CustomStyle.inputLabel}>Email / Phone No</Text>
          <InputTextField placeholderTextColor={'Enter email or phone no'} />
        </View>
        <CustomButton onPress={()=>nav.navigation.navigate("verificationOTP")} text={'SEND OTP'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneIage: {
    height: 100,
    width: 100,
  },
  verify: {
    color: blue,
    fontSize: 20,
    fontFamily: ROBOTO.RobotoMedium,
    textAlign: 'center',
  },
  verifyDesc: {
    color: blue,
    fontSize: 10,
    fontFamily: POPPINS.PoppinsLight,
    textAlign: 'center',
  },
});

// smartphone
