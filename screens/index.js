import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Login from './Login';
import Signup from './Signup';
import Buttomtab from '../components';
import Products from './Products';

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="bottomTab" component={Buttomtab} />
      <Stack.Screen name="products" component={Products} />
    </Stack.Navigator>
  );
}
