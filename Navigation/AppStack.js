import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import Homescreen from '../screens/Drawermenu/Homescreen';

export default function AppStack() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Article" component={Homescreen} />
    </Drawer.Navigator>
  );
}
