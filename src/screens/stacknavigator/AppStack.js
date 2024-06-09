import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Main_App from '../drawer_navigation/Main_App';
import SplashScreen from '../SplashScreen';
const Stack = createStackNavigator();
export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="mainapp" component={Main_App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
