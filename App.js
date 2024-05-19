import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, Button, Switch} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';

import Signup from './screens/Signup';
import Login from './screens/Login';
import Index from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {MenuProvider} from 'react-native-popup-menu';
import AppStack from './Navigation/AppStack';

// const Stack=createNativeStackNavigator()
export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <MenuProvider>
          <AppStack />
        </MenuProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

// https://meet.google.com/rex-hybz-why

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
