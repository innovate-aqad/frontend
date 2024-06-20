import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomStyle from '../../Styles';
import {
  blue,
  customGreen,
  customRed,
  grayColor,
  lightGray,
  white,
} from '../../constants/Theme';
import {POPPINS, ROBOTO} from '../../constants/CustomFontFamily';
import InputTextField from '../InputTextField';
import CustomButton from '../CustomButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

// AntDesign
export default function SetNewPassword(nav) {
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
          source={require('../../Assets/image/settings/lockpass.png')}
        />
      </View>
      <View>
        <Text style={styles.verify}>Set New Password</Text>
        <Text style={styles.verifyDesc}>
          Enter a new password for your account
        </Text>
      </View>
      <View className="m-4 mt-12">
        <View className="mb-7">
          <Text style={CustomStyle.inputLabel}>New Password</Text>
          <View className="flex flex-row items-center pr-1.5 justify-between w-full bg-white rounded-[10px] py-0">
            <View className="w-[88%]">
              <TextInput
                style={styles.input}
                placeholderTextColor={grayColor}
                placeholder="Example@gmail.com "
                className="!border-none pl-4 !border-white"
                borderRadius={10}
                name="email"
                //   value={values.email}
                //   onChangeText={handleChange('email')}
                //   onBlur={handleBlur('email')}
              />
            </View>
            <Text
              style={{
                color: '#ffc700',
                fontSize: 10,
                fontFamily: POPPINS.PoppinsSemiBold,
              }}>
              Weak
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.stongpass,
                {
                  textAlign: 'center',
                  marginTop: 5,
                  color: customRed,
                  fontFamily: POPPINS.PoppinsRegular,
                },
              ]}>
              Please add all necessary characters to create safe password.
            </Text>
            <View className="flex flex-row ml-3 items-center">
              <AntDesign name="check" color={customGreen} size={10} />
              <Text
                style={[
                  styles.stongpass,
                  {
                    marginLeft: 5,
                    marginTop: 5,
                    color: customGreen,
                    fontFamily: POPPINS.PoppinsRegular,
                  },
                ]}>
                Minimum characters 12
              </Text>
            </View>
            <View className="flex flex-row ml-3 items-center">
              <View className="h-1 w-1 rounded-full bg-red-600"></View>
              <Text
                style={[
                  styles.stongpass,
                  {
                    marginLeft: 5,
                    marginTop: 1,
                    color: customRed,
                    fontFamily: POPPINS.PoppinsRegular,
                  },
                ]}>
                One uppercase character
              </Text>
            </View>

            <View className="flex flex-row ml-3 items-center">
              <View
                className="h-1 w-1 rounded-full"
                style={{backgroundColor: lightGray}}></View>
              <Text
                style={[
                  styles.stongpass,
                  {
                    marginLeft: 5,
                    marginTop: 1,
                  },
                ]}>
                One lowercase character
              </Text>
            </View>
            <View className="flex flex-row ml-3 items-center">
              <View
                className="h-1 w-1 rounded-full"
                style={{backgroundColor: lightGray}}></View>
              <Text
                style={[
                  styles.stongpass,
                  {
                    marginLeft: 5,
                    marginTop: 1,
                  },
                ]}>
                One special character
              </Text>
            </View>
            <View className="flex flex-row ml-3 items-center">
              <View
                className="h-1 w-1 rounded-full"
                style={{backgroundColor: lightGray}}></View>
              <Text
                style={[
                  styles.stongpass,
                  {
                    marginLeft: 5,
                    marginTop: 1,
                  },
                ]}>
                One number
              </Text>
            </View>
          </View>
        </View>
        <View className="mb-6">
        <Text style={CustomStyle.inputLabel}>Confirm Password</Text>
        <View className="flex flex-row items-center pr-1.5 justify-between w-full bg-white rounded-[10px] py-0">
          <View className="w-[88%]">
            <TextInput
              style={styles.input}
              placeholderTextColor={grayColor}
              placeholder="Re-enter new password "
              className="!border-none pl-4 !border-white"
              borderRadius={10}
              name="email"
              //   value={values.email}
              //   onChangeText={handleChange('email')}
              //   onBlur={handleBlur('email')}
            />
          </View>
          <Text
            style={{
              color: customGreen,
              fontSize: 10,
              fontFamily: POPPINS.PoppinsSemiBold,
            }}>
            Verified
          </Text>
        </View>
        </View>
        <CustomButton
          onPress={() => nav.navigation.navigate('passChangeSuccess')}
          text={'CHANGE PASSWORD'}
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
  },
  input: {
    paddingVertical: 3,
    margin: 3,
    borderWidth: 1,
    color: 'red',
    backgroundColor: white,
    fontFamily: POPPINS.PoppinsLight,
  },
  stongpass: {
    fontFamily: POPPINS.PoppinsLight,
    fontSize: 10,
    color: lightGray,
  },
});

// smartphone
