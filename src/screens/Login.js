import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useFormik} from 'formik';
import {LoginSchema} from '../schemas/LoginSchema';
import {environmentVariables} from '../config/Config';
import {success} from '../constants/ToastMessage';
import {useNavigation} from '@react-navigation/native';
import VelidationSymbol from '../constants/VelidationSymbol';
import { POPPINS, ROBOTO } from '../constants/CustomFontFamily';
import { black, blue, grayColor, lightGray, screenBackground, textColorCustom, white } from '../constants/Theme';
import CustomButton from '../Shared/CustomButton';
import NetInfo from '@react-native-community/netinfo';

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
        NetInfo.fetch().then(state => {
          console.log(state, 'statestate');
          if (state.isConnected) {
            if (state.type === 'wifi' && state.isInternetReachable) {
              Alert.alert('Connection Info', 'You are connected to WiFi');
            } else if (state.type === 'cellular' && state.isInternetReachable) {
              Alert.alert(
                'Connection Info',
                'You are connected to Mobile Data',
              );
            } else {
              Alert.alert('Connection Info', 'No internet connection');
            }
            handleOnlineLogin(values, action);
          } else {
            Alert.alert('Connection Info', 'No internet connection');
          }
        });
      },
    });

  const handleOnlineLogin = async (values, action) => {
    try {
      const response = await axios.post(
        `${environmentVariables?.apiUrl}/api/user/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        },
      );
      action.resetForm();
      success({type: 'success', text: response.data.message});
      nav.navigation.navigate('otpscreen', {email: values.email, handleSubmit});
    } catch (error) {
      success({
        type: 'error',
        text: error?.response?.data?.message || error?.message,
      });
    }
  };

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      console.log('Is internet reachable?', state.isInternetReachable);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
      <View
        className="flex flex-col justify-center h-full p-5"
        style={{backgroundColor:screenBackground}}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.topNavigation}
              source={require('../Assets/image/drawable-xhdpi/arrow_left.png')}
            />
          </TouchableOpacity>
        <View>
          <Text
            style={{fontFamily: ROBOTO.RobotoBold,color:blue,fontSize:35}}>
            Welcome Back
          </Text>
          <Text
            style={{fontFamily: POPPINS.PoppinsLight,fontSize:13,color:"#7c7c7c"}}>
            Please enter your email and password for login
          </Text>
        </View>
        <View className="w-full pt-10">
          <SafeAreaView>
            <Text
              className="px-1"
              style={{fontFamily: POPPINS.PoppinsMedium,fontSize:13,color:blue}}>
              Your Email <VelidationSymbol/>
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
                borderRadius={10}
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
              className="px-3 mt-3"
              style={{fontFamily: POPPINS.PoppinsMedium,fontSize:13,color:blue}}>
              Password <VelidationSymbol/>
            </Text>

            <View>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.password}
                  placeholder="Enter your password"
                  underlineColorAndroid="transparent"
                  secureTextEntry={!showPassword}
                  keyboardType="default"
                  disableFullscreenUI={true}
                  borderRadius={10}
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
                    color={showPassword ? blue : lightGray}
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
                  onColor={blue}
                  offColor={grayColor}
                  // label="Example label"
                  labelStyle={{color: black, fontWeight: '900'}}
                  size="small"
                  onToggle={isOn => rememberMe(isOn)}
                />
              </View>

              <Text style={styles.label1}>
                Remember me
              </Text>
            </View>
            <Text
              className="text-[#00274D]"
              style={{fontFamily: 'Poppins-Medium'}}
              onPress={gotoForgot}>
              Forget Password?
            </Text>
          </View>
        </View>
        <View className="w-full">
          <View>
            <CustomButton onPress={() => handleSubmit()} text={"LOGIN"} />
          </View>

          <View
            className="py-5"
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1,backgroundColor:lightGray}} />
            
              <Text
                style={{
                  width: 50,
                  textAlign: 'center',
                  fontFamily: POPPINS.PoppinsMedium,
                  color:lightGray
                }}>
                OR
              </Text>
            <View style={{flex: 1, height: 1,backgroundColor:lightGray}} />
          </View>
        </View>
        <View className="flex flex-col gap-y-2">
          <TouchableOpacity className="flex-row items-center !px-4 py-2 my-1 bg-white rounded-[10px]">
            <AntDesign name="google" color={blue} size={22} />
            <Text className="flex-1" style={styles.socialText}>
              Sign up with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center !px-4 py-2 my-1 bg-white rounded-[10px]">
            <View>
              <AntDesign name="apple1" color={blue} size={22} />
            </View>
            <Text className="flex-1" style={styles.socialText} >
              Sign up with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row !px-4 py-2 items-center my-1 bg-white rounded-[10px]">
            <Ionicons name="finger-print-outline" color={blue} size={22} />
            <Text className="flex-1" style={styles.socialText}>
              Sign up with UEA Pass
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row items-center justify-center mt-8">
          <Text style={{fontFamily:ROBOTO.RobotoRegular,fontSize:13,color:blue}}>
            New to AQAD ?
          </Text>
          <TouchableOpacity
            className="px-5 "
            onPress={() => {
              nav.navigation.navigate('signup');
            }}>
            <Text style={{fontFamily:ROBOTO.RobotoRegular,fontSize:13,color:textColorCustom}}>
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
    color: grayColor,
    backgroundColor: white,
    fontFamily: POPPINS.PoppinsLight,
    paddingHorizontal: 18,
  },
  checkboxContainer: {
    marginBottom: 10,
  },
  label1: {
    margin: 8,
    fontFamily: POPPINS.PoppinsMedium,
    color:blue
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: white,
    backgroundColor: white,
    borderRadius: 10,
    paddingHorizontal: 18,
    borderBottomWidth: 0,
  },
  password: {
    flex: 1,
    height: 40,
    backgroundColor: white,
    borderColor: white,
    paddingRight: 5,
    color: lightGray,
    borderWidth: 2,
  },
  socialText:{
    fontFamily:ROBOTO.RobotoRegular,
    fontSize:13,
    color:blue,
    alignItems:"center",
    textAlign:"center"
  }
});
