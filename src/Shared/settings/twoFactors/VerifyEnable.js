import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomStyle from '../../../Styles';
import {
  blue,
  customGreen,
  grayColor,
  lightGray,
  textColorCustom,
  white,
} from '../../../constants/Theme';
import {POPPINS, ROBOTO} from '../../../constants/CustomFontFamily';
import InputTextField from '../../InputTextField';
import CustomButton from '../../CustomButton';
import message from '../../../Assets/image/settings/copy_alt.svg';
import qr_scan from '../../../Assets/image/settings/qr_scan.svg';
import copy_alt from '../../../Assets/image/settings/copy_alt.svg';
import SvgUri from 'react-native-svg-uri';
import OTPTextInput from 'react-native-otp-textinput';
// comment_alt.svg

export default function VerifyEnable(nav) {
  const navigation = useNavigation();
  const otpInputRef = useRef(null);
  return (
    <View>
      <View className="flex-row rounded-b-xl bg-[#f96900] px-4 pb-2 pt-7 items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[CustomStyle.topNavigation, {tintColor: white}]}
            source={require('../../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <Text
          className="flex-1 text-[20px] text-center text-white"
          style={{fontFamily: ROBOTO.RobotoBold, letterSpacing: 1}}>
          TWO FACTORS
        </Text>
      </View>
      <View className="m-5">
        <Text style={styles.verify}>Two Factors Authentication</Text>
        <Text style={styles.verifyDesc}>
          You will need an authenticator mobile app to complete this process,
          such as one of the following
        </Text>
      </View>
      <View className="">
        <Text className="w-44 mx-auto" style={styles.googleAuth}>
          Google Authenticator Microsoft Authenticator Duo Mobile
        </Text>
        <Image
          source={require('../../../Assets/image/settings/qr_code.png')}
          style={{height: 200, width: 200}}
          className="mx-auto my-4"
        />
        <Text
          className="w-80 mx-auto"
          style={[styles.googleAuth, {color: blue}]}>
          If you can't scan the code, you can enter this secret key into your
          authentication app
        </Text>
        <View className="mx-4 mt-2">
          <View className="flex flex-row items-center pr-1.5 justify-between w-full bg-white rounded-[10px] py-0">
            <View className="w-[87%]">
              <TextInput
                style={styles.input}
                placeholderTextColor={lightGray}
                placeholder="Enter Authentication"
                className="!border-none pl-4 !border-white"
                borderRadius={10}
                name="email"
                keyboardType="number-pad"
                //   value={values.email}
                //   onChangeText={handleChange('email')}
                //   onBlur={handleBlur('email')}
              />
            </View>
            <Image
              source={require('../../../Assets/image/settings/copy_alt.png')}
              style={{height: 24, width: 20}}
              className="mx-auto"
            />
            {/* copy_alt.png */}
          </View>
        </View>
      </View>
      <View className="m-4 mx-[26px]">
        <Text
          style={{
            fontSize: 13,
            fontFamily: POPPINS.PoppinsRegular,
            color: blue,
            textAlign: 'center',
          }}>
          After scanning the QR code above, enter the six-digit code generated
          by your authenticator
        </Text>
        <View className="w-64 mx-auto">
          <OTPTextInput
            ref={otpInputRef}
            //   handleTextChange={text => formik.setFieldValue('otp', text)}
            //   onBlur={handleBlur('otp')}
            tintColor={'red'}
            //   defaultValue='0'
            offTintColor={lightGray}
            textInputStyle={styles.otpInput}
          />
        </View>
      </View>
      <View className="m-4 mt-2">
        <CustomButton
            onPress={() => nav.navigation.navigate('successAuthontication')}
          text={'VERIFY'}
        />
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
    paddingHorizontal: 20,
  },
  googleAuth: {
    color: customGreen,
    fontSize: 13,
    fontFamily: POPPINS.PoppinsRegular,
    textAlign: 'center',
  },
  input: {
    paddingVertical: 3,
    margin: 3,
    borderWidth: 1,
    color: textColorCustom,
    backgroundColor: white,
    fontSize: 20,
    fontFamily: ROBOTO.RobotoMedium,
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
    shadowColor: 'red',
  },
});

// smartphone
