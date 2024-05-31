import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFormik} from 'formik';
import {LoginSchema} from '../schemas/LoginSchema';
import {environmentVariables} from '../config/Config';
import { success } from '../constants/ToastMessage';
import { useNavigation } from '@react-navigation/native';
// Make a request for a user with a given ID

export default function Login(nav) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const rememberMe = () => setIsEnabled(previousState => !previousState);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const gotoForgot = () => {
    nav.navigation.navigate('forgot');
  };

  const initialValues = {
    email: '',
    password: '',
  };
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        console.log('values', values);
        await axios({
          method: 'post',
          url: `${environmentVariables?.apiUrl}/api/user/login`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: {
            email: values.email,
            password: values.password,
          },
        })
          .then(response => {
            action.resetForm();
            success({type: 'success', text: response.data.message})
            nav.navigation.navigate('otpscreen', {email: values.email});
          })
          .catch(error => {
            success({type: 'error', text: error?.response?.data?.message || error?.message})
          });
      },
    });


    const navigation=useNavigation()
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View
        className="flex p-5 flex-col justify-center h-full bg-gray-100 !text-black"
        style={{fontFamily: 'Poppins-Bold'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.topNavigation}
              source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        <View>
          <Text
            className="text-3xl text-[#00274D]"
            style={{fontFamily: 'Roboto-Bold'}}>
            Welcome Back
          </Text>
          <Text
            className="text-xs text-gray-400"
            style={{fontFamily: 'Poppins-Light'}}>
            Please enter your email and password for login
          </Text>
        </View>
        <View className="w-full pt-10">
          <SafeAreaView>
            <Text
              className="text-[#00274D] px-3"
              style={{fontFamily: 'Poppins-Medium'}}>
              Your Email
            </Text>
            <View>
              <TextInput
                name="email"
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                placeholderTextColor="rgb(210, 210, 210)"
                placeholder="example@gmail.com"
                className="!border-none pl-4 py-1.5 !border-white"
                borderRadius={18}
              />

              {errors.email && touched.email && (
                <Text
                  style={{
                    color: 'red',
                    paddingLeft: 20,
                    paddingTop: 2,
                    fontSize: 12,
                  }}>
                  {errors.email}
                </Text>
              )}
            </View>

            <Text
              className="text-[#00274D] px-3 mt-3"
              style={{fontFamily: 'Poppins-Medium'}}>
              Password
            </Text>

            <View>
              <View style={styles.container1}>
                <TextInput
                  style={styles.input1}
                  placeholder="Enter your password"
                  underlineColorAndroid="transparent"
                  // maxLength={6}
                  secureTextEntry={!showPassword}
                  keyboardType="default"
                  disableFullscreenUI={true}
                  borderRadius={18}
                  placeholderTextColor="rgb(210, 210, 210)"
                  name="password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />

                <TouchableOpacity onPress={toggleShowPassword}>
                  <Icon
                    name={showPassword ? 'eye-slash' : 'eye'}
                    size={24}
                    color={showPassword ? '#00274D' : '#cbcbcb'}
                  />
                </TouchableOpacity>
              </View>

              {errors.password && touched.password && (
                <Text
                  style={{
                    color: 'red',
                    paddingLeft: 20,
                    paddingTop: 2,
                    fontSize: 12,
                  }}>
                  {errors.password}
                </Text>
              )}
            </View>
          </SafeAreaView>

          <View
            style={styles.checkboxContainer}
            className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <View style={{borderWidth: 0, borderColor: 'transparent'}}>
                <ToggleSwitch
                  isOn={isEnabled}
                  onColor="#00274D"
                  offColor="gray"
                  // label="Example label"
                  labelStyle={{color: 'black', fontWeight: '900'}}
                  size="small"
                  onToggle={isOn => rememberMe(isOn)}
                />
              </View>

              <Text style={styles.label1} className="text-[#00274D]">
                Remember me
              </Text>
            </View>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-Medium'}}
              onPress={gotoForgot}>
              Forget Password ?
            </Text>
          </View>
        </View>
        <View className="w-full">
          <View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.button}>
              <Text
                className="text-white text-[18px]"
                style={{fontFamily: 'Roboto-Regular'}}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>

          <View
            className="py-5"
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1}} className="bg-gray-300" />
            <View>
              <Text
                className="text-gray-400"
                style={{
                  width: 50,
                  textAlign: 'center',
                  fontFamily: 'Poppins-Medium',
                }}>
                OR
              </Text>
            </View>
            <View style={{flex: 1, height: 1}} className="bg-gray-300" />
          </View>
        </View>
        <View className="flex flex-col gap-y-2">
          <TouchableOpacity className="flex-row items-center !px-4 py-2 my-1 bg-white border border-white rounded-full">
            <AntDesign name="google" color={'black'} size={22} />
            <Text className=" text-center font-[Roboto-Regular] text-[#00274D] flex-1">
              Sign up with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center !px-4 py-2 my-1 bg-white border !border-white rounded-full">
            <View>
              <AntDesign name="apple1" color={'black'} size={22} />
            </View>
            <Text className=" text-center font-[Roboto-Regular] text-[#00274D] flex-1">
              Sign up with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row !px-4 py-2 items-center my-1 bg-white border !border-white rounded-full">
            <Ionicons name="finger-print-outline" color={'black'} size={22} />
            <Text className=" text-center font-[Roboto-Regular] text-[#00274D] flex-1">
              Sign up with UEA Pass
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-center mt-8">
          <Text className="text-gray-400 font-[Roboto-Regular]">
            New to AQAD ?
          </Text>
          <TouchableOpacity
            className="px-5 "
            onPress={() => {
              nav.navigation.navigate('signup');
            }}>
            <Text className="text-[#F96900] font-[Roboto-Regular]">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topNavigation: {
    height: 15,
    width: 23.3,
    marginBottom: 20,
  },
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
    fontFamily: 'Poppins-Medium',
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
