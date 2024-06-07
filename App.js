import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {MenuProvider} from 'react-native-popup-menu';
import Toast from 'react-native-toast-message';
import Index from './src/screens';
import Main_App from './src/screens/vendor_drawer/Main_App';

// const Stack=createNativeStackNavigator()
export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <NavigationContainer>
      <MenuProvider>
        {/* <Index /> */}
        <Main_App />
        <Toast />
      </MenuProvider>
    </NavigationContainer>
  );
}
