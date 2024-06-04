import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useFormik} from 'formik';
import OTPTextInput from 'react-native-otp-textinput';
import {OtpSchema} from '../../schemas/OtpSchema';
import {environmentVariables} from '../../config/Config';
import {success} from '../../constants/ToastMessage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeToken, storeToken} from '../../Shared/EncryptionDecryption/Token';
export default function OtpScreen({route}) {
  const otpInputRef = useRef(null);
  const {email} = route.params;
  console.log(route.params, 'route.params');
  const navigation = useNavigation();
  const initialValues = {
    otp: '',
  };
  let formik = useFormik({
    initialValues,
    validationSchema: OtpSchema,
    onSubmit: async (values, action) => {
      await axios({
        method: 'post',
        url: `${environmentVariables?.apiUrl}/api/user/login_with_otp`,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        data: {
          email,
          otp: values.otp,
        },
      })
        .then(async response => {
          action.resetForm();
          success({type: 'success', text: response.data.message});
          console.log('ffff', response?.data?.data?.token);
          await storeToken(response?.data?.data?.token);
          // await removeToken();
          if (response.data.data.user_type === 'vendor') {
            navigation.navigate('productIndex');
          } else if (response.data.data.user_type === 'retailer') {
            navigation.navigate('retailerIndex');
          } else {
            navigation.navigate('logisticIndex');
          }
        })
        .catch(error => {
          console.log('error', error);
          success({type: 'success', text: error.response.data.message});
        });
    },
  });

  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    formik;

  useEffect(async () => {
    const storedToken = await AsyncStorage.getItem('_token');
    console.log('storedToken,', storedToken);
  }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View className="m-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          className="text-xl flex items-center justify-center text-center text-[#00274D]"
          style={{fontFamily: 'Roboto-Regular'}}>
          Please enter your OTP to verify your user account and log in.
        </Text>
      </View>

      <View className="flex px-4 flex-col justify-center items-center my-auto  bg-gray-100 !text-black">
        <View className="w-full">
          <View className="mx-auto mb-4">
            <View className="flex items-center justify-center w-14 h-14 mx-auto rounded-full bg-[#f6d9c4]">
              <MaterialIcons name="verified-user" color={'#f96900'} size={35} />
            </View>
            <Text
              className="px-3 text-lg text-black"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Please Enter OTP
              {/* <VelidationSymbol/> */}
            </Text>
          </View>
          <View className="">
            <OTPTextInput
              ref={otpInputRef}
              handleTextChange={text => formik.setFieldValue('otp', text)}
              onBlur={handleBlur('otp')}
              tintColor={'red'}
              // textInputStyle={{
              //   color: '#00274d',
              //   fontFamily: 'Roboto-ExtraBold',
              // }}
              textInputStyle={styles.otpInput}
            />
            {errors.otp && touched.otp && (
              <Text style={{color: 'red'}}>{errors.otp}</Text>
            )}
          </View>
        </View>
        <View className="w-full mt-4">
          <View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.button}>
              <Text
                className="text-white"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                VERIFY OTP
              </Text>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity className="mt-5 w-14" onPress={()=>resend()}>
            <Text className="text-blue-600 ">resend</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
  },
  topNavigation: {
    height: 15,
    width: 23.3,
    marginBottom: 15,
  },
  input: {
    paddingVertical: 4,
    margin: 3,
    borderWidth: 1,
    color: 'gray',
    backgroundColor: 'white',
    fontFamily: 'Poppins-Light',
  },
  checkboxContainer: {
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label1: {
    margin: 8,
    fontFamily: 'Poppins-SemiBold',
  },
  button: {
    backgroundColor: '#F96900', // Default button color
    padding: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    color: 'red',
  },

  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 18,
    // marginHorizontal: 10,
    borderBottomWidth: 0,
  },
  input1: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'white',
    paddingRight: 5,
    color: '#cbcbcb',
    borderWidth: 2,
    // marginLeft: 5,
  },
});
