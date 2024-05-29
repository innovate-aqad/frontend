import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import Index from './screens';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {MenuProvider} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';

// const Stack=createNativeStackNavigator()
export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <NavigationContainer>
      <MenuProvider>
        <Index />
        <Toast />
      </MenuProvider>
    </NavigationContainer>
  );
}
