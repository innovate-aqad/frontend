import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Login from './Login';
import Signup from './Signup';
import Buttomtab from '../components';
import Products from './Products';
import Orders from './Orderes';
import Dashboard from './Dashboard';
import ProductIndex from './ProduceIndex';
import VendorPersonalInformation from './VendorPersonalInformation';
import Forgot from './Forgot';

import VendorInfo from './VendorInfo';
import VendorBusiness from './VendorBusiness';
import VendorDocumet from './VendorDocumet';
import Logisticinfo from './Logisticinfo';
import Logisticbusiness from './Logisticbusiness';
import Logisticdocument from './Logisticdocument';
import Addbutton from './Addbutton';
import OtpScreen from '../screens/otp_screen/OtpScreen.js';

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="bottomTab" component={Buttomtab} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="forgot" component={Forgot} />
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="productIndex" component={ProductIndex} />
      <Stack.Screen
        name="vendorPersonalInformation"
        component={VendorPersonalInformation}
      />
      <Stack.Screen name="vendor" component={VendorInfo} />
      <Stack.Screen name="business" component={VendorBusiness} />
      <Stack.Screen name="document" component={VendorDocumet} />
      <Stack.Screen name="logistic" component={Logisticinfo} />
      <Stack.Screen name="logisbusiness" component={Logisticbusiness} />
      <Stack.Screen name="logisdocument" component={Logisticdocument} />
      <Stack.Screen name="addbutton" component={Addbutton} />
      <Stack.Screen name="otpscreen" component={OtpScreen} />
    </Stack.Navigator>
  );
}
