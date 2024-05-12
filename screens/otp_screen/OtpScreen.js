import {
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
  import { useNavigation } from '@react-navigation/native'; 
  import axios from 'axios';
  import { useFormik } from 'formik';
  import { OtpSchema } from '../../schemas/OtpSchema';
  
  export default function OtpScreen({ route }) {
    const { email } = route.params;
    const navigation = useNavigation();
    const initialValues = {
      otp: "",
    };
    console.log
    let formik =  useFormik({
        initialValues,
        validationSchema: OtpSchema,
        onSubmit: async (values, action) => {
          await axios({
            method: "post",
            url: `http://3.29.2.101:2000/api/user/login_with_otp`,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            data: {
              email,
              otp: values.otp,
            },
          })
            .then((response) => {
              console.log(response.data, "otpres");
              action.resetForm();
              ToastAndroid.showWithGravityAndOffset(
                response.data.message,
                ToastAndroid.LONG,
                ToastAndroid.CENTER,
                25,
                50,
              );
  
              navigation.navigate('dashboard');

            })
            .catch((error) => {
              console.log("error", error);
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
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;
     
  
    return (
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
      <View
        className="flex p-5 flex-col justify-center h-full bg-gray-100 !text-black"
        style={{fontFamily: 'Poppins-Bold'}}>
       
        <View className="w-full pt-10">
          <SafeAreaView>
            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              Please Enter OTP
            </Text>
            <View>
              <TextInput
                name="otp"
                style={styles.input}
  
                value={values.otp}
                onChangeText={handleChange('otp')}
                onBlur={handleBlur('otp')}
                
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="example@gmail.com"
                className="!border-none pl-4 py-1.5 !border-white"
                borderRadius={18}
              />
            {errors.otp && touched.otp && <Text style={{ color: 'red' }}>{errors.otp}</Text>}
              
  
            </View>
          </SafeAreaView>


        </View>
        <View className="w-full">
          <View>
            <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
              <Text
                className="text-white"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                SUBMIT
              </Text>
            </TouchableOpacity>
          </View>
  
        </View>
      </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      color: 'gray',
      backgroundColor: 'white',
      fontFamily: 'Poppins-Light',
      paddingHorizontal: 18,
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
      paddingHorizontal:40,
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
  