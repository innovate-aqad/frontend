import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerTest from './DrawerTest';
import DreawerSise from './DreawerSise';

const Drawer = createDrawerNavigator();

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="date" component={DrawerTest} />
        <Drawer.Screen name="login" component={DreawerSise} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
