import {View, Text, TouchableOpacity, Button, Switch} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';

import Signup from './screens/Signup';
import Login from './screens/Login';
import Index from './screens';
import { NavigationContainer } from '@react-navigation/native';




// const Stack=createNativeStackNavigator()
export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    // <View
    //   className="flex p-5 flex-col justify-center h-full bg-gray-100 !text-black
    //  "
    //   style={{fontFamily: 'Poppins-Bold'}}>
    //   <View>
    //     <Text
    //       className="text-3xl text-[#00274D]"
    //       style={{fontFamily: 'Poppins-Bold'}}>
    //       Welcome Back
    //     </Text>
    //     <Text
    //       className="text-xs text-gray-400"
    //       style={{fontFamily: 'Poppins-Light'}}>
    //       Please enter your email and password for login
    //     </Text>
    //   </View>
    //   <View className="w-full pt-10">
    //     <SafeAreaView>
    //       <Text
    //         className="text-[#00274D] px-3"
    //         style={{fontFamily: 'Poppins-SemiBold'}}>
    //         Your Email
    //       </Text>
    //       <TextInput
    //         style={styles.input}
    //         placeholderTextColor="rgb(210, 210, 210)"
    //         placeholder="Example@gmail.com"
    //         className="!border-none pl-4 !border-white"
    //         borderRadius={18}
    //       />
    //       <Text
    //         className="text-[#00274D] px-3 mt-3"
    //         style={{fontFamily: 'Poppins-SemiBold'}}>
    //         Password
    //       </Text>
    //       <TextInput
    //         style={styles.input}
    //         // onChangeText={onChangeNumber}
    //         // value={number}
    //         placeholder="Enter your password"
    //         keyboardType="numeric"
    //         placeholderTextColor="rgb(210, 210, 210)"
    //         className="!border-none pl-4 border-white"
    //         borderRadius={18}
    //       />
    //     </SafeAreaView>
    //     <View
    //       style={styles.checkboxContainer}
    //       className="flex flex-row items-center justify-between">
    //       <View className="flex flex-row items-center">
    //         <View style={{borderWidth: 0, borderColor: 'transparent'}}>
              
    //           <Switch
    //             trackColor={{false: 'gray', true: '#00274D'}}
    //             thumbColor={isEnabled ? 'white' : 'white'}
    //             ios_backgroundColor="#00274D"
    //             onValueChange={toggleSwitch}
    //             value={isEnabled}
    //           />
    //         </View>

    //         <Text style={styles.label1} className="text-[#00274D]">
    //           Remember me
    //         </Text>
    //       </View>
    //       <Text
    //         className="text-[#00274D]"
    //         style={{fontFamily: 'Poppins-SemiBold'}}>
    //         Forget Password ?
    //       </Text>
    //     </View>
    //   </View>
    //   <View className="w-full">
    //     <View>
    //       <TouchableOpacity style={styles.button}>
    //         <Text
    //           className="text-white"
    //           style={{fontFamily: 'Poppins-SemiBold'}}>
    //           LOGIN
    //         </Text>
    //       </TouchableOpacity>
    //     </View>

    //     <View
    //       className="py-5"
    //       style={{flexDirection: 'row', alignItems: 'center'}}>
    //       <View style={{flex: 1, height: 1}} className="bg-gray-300" />
    //       <View>
    //         <Text
    //           className="text-gray-400"
    //           style={{
    //             width: 50,
    //             textAlign: 'center',
    //             fontFamily: 'Poppins-SemiBold',
    //           }}>
    //           OR
    //         </Text>
    //       </View>
    //       <View style={{flex: 1, height: 1}} className="bg-gray-300" />
    //     </View>
    //   </View>
    //   <View className="flex flex-col gap-y-2">
    //     <TouchableOpacity className="flex-row items-center p-2 my-1 bg-white border !border-white rounded-2xl">
    //       <AntDesign name="google" color={'black'} size={22} />
    //       <Text className="pl-10 text-center text-[#00274D]">
    //         Continue with Google
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity className="flex-row items-center p-2 my-1 bg-white border !border-white rounded-2xl">
    //       <View>
    //         <AntDesign name="apple1" color={'black'} size={22} />
    //       </View>
    //       <Text className="pl-10 text-center text-[#00274D]">
    //         Continue with Apple
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity className="flex-row items-center p-2 my-1 bg-white border !border-white rounded-2xl">
    //       <Ionicons name="finger-print-outline" color={'black'} size={22} />
    //       <Text className="pl-10 text-center text-[#00274D]">
    //         Continue with UEA Pass
    //       </Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View className="flex flex-row items-center justify-center mt-8">
    //     <Text className="text-gray-400">New to AQAD ?</Text>
    //     <Text className="px-5 text-[#F96900]">Sign Up</Text>
    //   </View>
    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
<Index></Index>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 3,
    borderWidth: 1,
    // padding: 12,
    color: 'gray',
    backgroundColor: 'white',
    // borderRadius: 20,
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
    borderRadius: 5,
    alignItems: 'center',
    color: 'red',
  },
});



