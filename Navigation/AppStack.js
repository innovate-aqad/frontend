import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import Homescreen from '../screens/Drawermenu/Homescreen';
import Product from '../screens/Drawermenu/Product';

export default function AppStack() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Homescreen} />
      <Drawer.Screen name="Notifications" component={Product} />
    </Drawer.Navigator>
  );
}
