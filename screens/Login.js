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
import { useFormik } from 'formik';
<<<<<<< Updated upstream
import { LoginSchema } from '../schemas/LoginSchema';
=======
// import { LoginSchema } from '../schemas/LoginSchema';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    nav.navigation.navigate('productIndex');
=======
    // nav.navigation.navigate('productIndex');
>>>>>>> Stashed changes
    // console.log(email, 'emailemailemail');
    // console.log(password, 'passwordpasswordpasswordpassword');

    if(emailError && passwordError){
      setEmail("")
      setPassword("")
      nav.navigation.navigate('productIndex');
      ToastAndroid.showWithGravityAndOffset(
        'Login Success',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50,
      );

    }else{
      ToastAndroid.showWithGravityAndOffset(
        'Invalid email and passwords',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50,
      );
    }

<<<<<<< Updated upstream
    // axios
    //   .get('/user?ID=12345')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //     // nav.navigation.navigate('productIndex')
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
=======
    axios
      .get('http://192.168.15.249:7070/category')
      .then(function (response) {
        // handle success
        console.log(response,"Sdfjskdjlkjsdlk");
        // nav.navigation.navigate('productIndex')
      })
      .catch(function (error) {
        // handle error
        console.log(error,"ksjdhfkjhfkjs");
      })
      .finally(function () {
        // always executed
      });
>>>>>>> Stashed changes
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
<<<<<<< Updated upstream
      validationSchema: LoginSchema,
=======
      // validationSchema: LoginSchema,
>>>>>>> Stashed changes
      onSubmit: async (values, action) => {
        console.log("values",values)
        await axios({
          method: "post",
          url: `http://3.29.209.107:2000/api/user/login`,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          data: {
            email: values.email,
            password: values.password,
          },
        })
          .then((response) => {
            console.log(response.data, "loginres");
            action.resetForm();
            ToastAndroid.showWithGravityAndOffset(
              response.data.message,
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
              25,
              50,
            );
            nav.navigation.navigate('otpscreen',{ email: values.email })

            

            // setIsApiResponse(false);
            // if (response.data.message === "User is not verified") {
            //   Swal.fire({
            //     icon: "error",
            //     title: "Email is not verified",
            //   });
            // } else {
            //   const expirationTime = 1 * 60 * 1000; // 1 hour in milliseconds
            //   const expirationTimestamp = new Date().getTime() + expirationTime;
            //   const { data } = response;
            //   localStorage.setItem(
            //     "authdata",
            //     JSON.stringify({ data, expirationTimestamp })
            //   );

            //   setAuthData({ data, expirationTimestamp });

            //   Swal.fire({
            //     icon: "success",
            //     text: "Successfully Login",
            //     // title: "Successfully Login",
            //     timer: "1000",
            //   });
            //   setShowPopup(false);
            // }
          })
          .catch((error) => {
            console.log("error", error.response.data.message);
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
            
            {errors.email && touched.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}

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
            
            {errors.password && touched.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}

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
          <TouchableOpacity onPress={() => handleSubmit()} style={styles.button}>
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
          onPress={() => {
            // nav.navigation.navigate('document',{ id : "2e1e026b99724e698d4531e949484e5d" });
            nav.navigation.navigate('signup')
          }}>
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
