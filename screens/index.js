import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react'
import { View } from 'react-native'
import Login from './Login';
import Signup from './Signup';

export default function Index() {
    const Stack = createNativeStackNavigator();
  return (
   
        
        <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator>
   
  )
}
