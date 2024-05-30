import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DemoTexting from '../src/DemoTexting';
import Demo22 from '../src/Demo22';

// const Stack=createNativeStackNavigator()
export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="date" component={Demo22} />
        <Drawer.Screen name="login" component={DemoTexting} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
