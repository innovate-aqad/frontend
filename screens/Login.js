import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ToggleSwitch from 'toggle-switch-react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
// Make a request for a user with a given ID

export default function Login(nav) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const rememberMe = () => setIsEnabled(previousState => !previousState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const gotoForgot = () => {
    nav.navigation.navigate('forgot');
  };


  const handleEmail=(e)=>{
    const emailVar =e.nativeEvent.text
    console.log(emailVar);
    setEmail(emailVar)
    setEmailError(false);
    if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{1,}$/.test(emailVar)){
      setEmail(emailVar)
       setEmailError(true);
    }
  }
  const handlePassword=(e)=>{
    const passVar =e.nativeEvent.text
    console.log(passVar);
    setPassword(passVar)
    setPasswordError(false);
    if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(passVar)){
      setPassword(passVar)
      setPasswordError(true);
    }

  }

  const redirect = () => {
   
    // if (!passwordError) {
    //   setPasswordError(true);
    // } else {
    //   setPasswordError(false);
    // }
    // nav.navigation.navigate('bottomTab');
    nav.navigation.navigate('productIndex');
    // console.log(email, 'emailemailemail');
    // console.log(password, 'passwordpasswordpasswordpassword');

    // if(emailError && passwordError){
    //   setEmail("")
    //   setPassword("")
    //   nav.navigation.navigate('productIndex');
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Login Success',
    //     ToastAndroid.LONG,
    //     ToastAndroid.CENTER,
    //     25,
    //     50,
    //   );

    // }else{
    //   ToastAndroid.showWithGravityAndOffset(
    //     'Invalid email and passwords',
    //     ToastAndroid.LONG,
    //     ToastAndroid.CENTER,
    //     25,
    //     50,
    //   );
    // }

    // axios
    //   .get('http://10.0.2.2:7070/category')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log("error");
    //   })
    //   .finally(function () {
    //     // always executed
    //     console.log("not");
    //   });
  };



  console.log(emailError,"emailError");

  return (
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1}} showsVerticalScrollIndicator={false}>
    <View
      className="flex p-5 flex-col justify-center h-full bg-gray-100 !text-black"
      style={{fontFamily: 'Poppins-Bold'}}>
      <View>
        <Text
          className="text-3xl text-[#00274D]"
          style={{fontFamily: 'Poppins-Bold'}}>
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
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Your Email
          </Text>
          <View>
            <TextInput
              name="temail"
              onChange={e=>handleEmail(e)}
              style={styles.input}
              value={email}
              
              placeholderTextColor="rgb(210, 210, 210)"
              placeholder="example@gmail.com"
              className="!border-none pl-4 py-1.5 !border-white"
              borderRadius={18}
            />
            
            {email.length < 1 ? null : emailError==true ? null : (
              <Text className="px-4 font-serif text-[10px] text-red-500">
                Please enter valid email
              </Text>
            )}
          </View>

          <Text
            className="text-[#00274D] px-3 mt-3"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Password
          </Text>

          <View>
            <View style={styles.container1}>
              <TextInput
                style={styles.input1}
                placeholder="Enter your password"
                underlineColorAndroid="transparent"
                onChange={e=>handlePassword(e)}
                value={password}
                maxLength={6}
                secureTextEntry={!showPassword}
                keyboardType="default"
                disableFullscreenUI={true}
                borderRadius={18}
                placeholderTextColor="rgb(210, 210, 210)"
              />

              <TouchableOpacity onPress={toggleShowPassword}>
                <Icon
                  name={showPassword ? 'eye-slash' : 'eye'}
                  size={24}
                  color={showPassword ? '#00274D' : '#cbcbcb'}
                />
              </TouchableOpacity>
            </View>
            
            {password.length < 1 ? null : passwordError==true ? null : (
              <Text className="px-4 font-serif text-[10px] text-red-500">
                Please enter valid password
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
            style={{fontFamily: 'Poppins-SemiBold'}}
            onPress={gotoForgot}>
            Forget Password ?
          </Text>
        </View>
      </View>
      <View className="w-full">
        <View>
          <TouchableOpacity onPress={() => redirect()} style={styles.button}>
            <Text
              className="text-white"
              style={{fontFamily: 'Poppins-SemiBold'}}>
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
                fontFamily: 'Poppins-SemiBold',
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
          <Text className=" text-center text-[#00274D] flex-1">
            Sign up with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center !px-4 py-2 my-1 bg-white border !border-white rounded-full">
          <View>
            <AntDesign name="apple1" color={'black'} size={22} />
          </View>
          <Text className=" text-center text-[#00274D] flex-1">
            Sign up with Apple
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row !px-4 py-2 items-center my-1 bg-white border !border-white rounded-full">
          <Ionicons name="finger-print-outline" color={'black'} size={22} />
          <Text className=" text-center text-[#00274D] flex-1">
            Sign up with UEA Pass
          </Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center justify-center mt-8">
        <Text className="text-gray-400">New to AQAD ?</Text>
        <Text
          className="px-5 text-[#F96900]"
          onPress={() => nav.navigation.navigate('signup')}>
          Sign Up
        </Text>
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
