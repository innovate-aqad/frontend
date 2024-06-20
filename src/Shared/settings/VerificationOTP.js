import {useNavigation} from '@react-navigation/native';
import React, { useRef } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomStyle from '../../Styles';
import {blue, textColorCustom, white} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import InputTextField from '../InputTextField';
import CustomButton from '../CustomButton';
import OTPTextInput from 'react-native-otp-textinput';

export default function VerificationOTP(nav) {
  const navigation = useNavigation();
  const otpInputRef = useRef(null);
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
          source={require('../../Assets/image/settings/alert.png')}
        />
      </View>
      <View>
        <Text style={styles.verify}>Check Your Email / SMS</Text>
        <Text style={styles.verifyDesc}>
          We've sent OTP on your registered email / phone no
        </Text>
        <Text style={styles.email}>Alda.Halvorson9@example.com</Text>
      </View>
      <View className="m-4 mt-12">
        <View className="flex flex-col mx-auto w-72">
          <Text style={[CustomStyle.inputLabel,{textAlign:"center",marginBottom:15}]}>ENTER OTP</Text>
          <OTPTextInput
              ref={otpInputRef}
            //   handleTextChange={text => formik.setFieldValue('otp', text)}
            //   onBlur={handleBlur('otp')}
              tintColor={'red'}
            //   defaultValue='0'
              offTintColor={"gray"}
              textInputStyle={styles.otpInput}
            />
        </View>
        <View className="flex flex-row items-center justify-center mb-3 gap-x-3 mt-7">
            <Text style={{fontSize:13,fontFamily:ROBOTO.RobotoRegular,color:blue}}>Didn't receive OTP ?</Text>
            <Text style={{fontSize:13,fontFamily:ROBOTO.RobotoRegular,color:textColorCustom}}>Resend</Text>

        </View>
        <CustomButton text={'VERIFY OTP'} onPress={()=>nav.navigation.navigate("setNewPassword")} />
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
  email: {
    color: textColorCustom,
    fontSize: 13,
    marginTop: 4,
    fontFamily: POPPINS.PoppinsSemiBold,
    textDecorationStyle: 'solid',
    textAlign: 'center',
  },
  otpInput: {
    color: '#00274d',
    fontFamily: 'Roboto-ExtraBold',
    borderRadius: 10,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#00274d',
    width: 50,
    height: 50,
    textAlign: 'center',
    shadowColor:"red",
    
  },
});

// smartphone
