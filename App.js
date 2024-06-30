import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import Index from './src/screens';
import Toast from 'react-native-toast-message';
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