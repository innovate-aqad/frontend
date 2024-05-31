import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {MenuProvider} from 'react-native-popup-menu';
import AppStack from './Navigation/AppStack';

// const Stack=createNativeStackNavigator()
export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <NavigationContainer>
      <MenuProvider>
        <AppStack />
      </MenuProvider>
    </NavigationContainer>
  );
}

// https://meet.google.com/rex-hybz-why
