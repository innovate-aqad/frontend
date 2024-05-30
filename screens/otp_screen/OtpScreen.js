import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {useFormik} from 'formik';
// import {environmentVariables} from '../config/Config';
import {OtpSchema} from '../../schemas/OtpSchema';
import {environmentVariables} from '../../config/Config';

import AsyncStorage from '@react-native-async-storage/async-storage';
export default function OtpScreen({route}) {
  const {email} = route.params;
  const navigation = useNavigation();
  const initialValues = {
    otp: '',
  };
  console.log;
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
          console.log(response.data.data.token, 'otpres');
          const saveToken = await AsyncStorage.setItem(
            '_token',
            response?.data?.data.token,
          );
          action.resetForm();
          ToastAndroid.showWithGravityAndOffset(
            response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );

          navigation.navigate('productIndex');
        })
        .catch(error => {
          console.log('error', error);
          ToastAndroid.showWithGravityAndOffset(
            error.response.data.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50,
          );
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
        <TouchableOpacity onPress={() => route.navigation.navigate('Login')}>
          <Image
            style={styles.topNavigation}
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
          />
        </TouchableOpacity>
        <View className="mt-5">
          <Text
            className="text-3xl text-[#00274D]"
            style={{fontFamily: 'Roboto-Bold'}}>
            Welcome Back
          </Text>
          <Text
            className="text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Please enter your OTP to verify your user account and log in.
          </Text>
        </View>
      </View>

      <View
        className="flex px-4 flex-col justify-center items-center my-auto  bg-gray-100 !text-black"
        style={{fontFamily: 'Poppins-Bold'}}>
        <View className="w-full">
          <Text
            className="px-3 text-black"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Please Enter OTP
          </Text>
          <View className="">
            <TextInput
              name="otp"
              style={styles.input}
              value={values.otp}
              onChangeText={handleChange('otp')}
              onBlur={handleBlur('otp')}
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="Enter OTP"
              className="!border-none pl-4 py-1.5 !border-white"
              borderRadius={10}
              maxLength={4}
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
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
