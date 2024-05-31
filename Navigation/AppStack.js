import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import Homescreen from './Homesccreen';
import Product from './Product';

export default function AppStack() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Notifications" component={Product} />
    </Drawer.Navigator>
  );
}
