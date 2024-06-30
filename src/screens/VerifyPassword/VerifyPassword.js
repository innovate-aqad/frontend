import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFormik} from 'formik';
import {LoginSchema} from '../schemas/LoginSchema';
import {environmentVariables} from '../../config/Config';
import {success} from '../../constants/ToastMessage';
import {useNavigation} from '@react-navigation/native';
import VelidationSymbol from '../../constants/VelidationSymbol';
import {VerifyPasswordSchema} from '../../schemas/VerifyPasswordSchema';
// Make a request for a user with a given ID

export default function VerifyPassword({route}) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const rememberMe = () => setIsEnabled(previousState => !previousState);
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const {email, otp_code} = route.params;
  //   console.log('  const {email, otp_code} = route.params;', email, otp_code);
  const gotoForgot = () => {
    nav.navigation.navigate('forgot');
  };

  const initialValues = {
    password: '',
    confirmPassword: '',
  };

  const navigation = useNavigation();
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
    useFormik({
      initialValues,
      validationSchema: VerifyPasswordSchema,
      onSubmit: async (values, action) => {
        console.log(
          'values_verify_passsword',
          values?.password,
          email,
          otp_code,
        );
        await axios({
          method: 'put ',
          url: `${environmentVariables?.apiUrl}/api/user/reset_password`,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          data: {
            email: email,
            password: values.password,
            otp_code: otp_code,
          },
        })
          .then(response => {
            action.resetForm();
            success({type: 'success', text: response.data.message});
            navigation.navigate('Login');
          })
          .catch(error => {
            console.log(
              error?.message,
              error?.response?.data?.message,
              `${environmentVariables?.apiUrl}/api/user/reset_password`,
            );
            success({
              type: 'error',
              text: error?.response?.data?.message || error?.message,
            });
          });
      },
    });

  //   const navigation = useNavigation();
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
            source={require('../../Assets/image/drawable-xhdpi/arrow_left.png')}
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
            Please Verify Your Account
          </Text>
        </View>
        <View className="w-full pt-10">
          <SafeAreaView>
            <Text
              className="text-[#00274D] px-3 mt-3"
              style={{fontFamily: 'Poppins-Medium'}}>
              Password <VelidationSymbol />
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
          <SafeAreaView>
            <Text
              className="text-[#00274D] px-3 mt-3"
              style={{fontFamily: 'Poppins-Medium'}}>
              Confirm Password <VelidationSymbol />
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
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />

                <TouchableOpacity onPress={toggleShowPassword}>
                  <Icon
                    name={showPassword ? 'eye-slash' : 'eye'}
                    size={24}
                    color={showPassword ? '#00274D' : '#cbcbcb'}
                  />
                </TouchableOpacity>
              </View>

              {errors.confirmPassword && touched.confirmPassword && (
                <Text
                  style={{
                    color: 'red',
                    paddingLeft: 20,
                    paddingTop: 2,
                    fontSize: 12,
                  }}>
                  {errors.confirmPassword}
                </Text>
              )}
            </View>
          </SafeAreaView>

          {/* <View
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
         
          </View> */}
        </View>
        <View className="w-full mt-5">
          <View>
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.button}>
              <Text
                className="text-white text-[18px]"
                style={{fontFamily: 'Roboto-Regular'}}>
                UPDATE
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
