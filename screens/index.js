import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Login from './Login';
import Signup from './Signup';
import Buttomtab from '../components';
import Products from './Vendor/Products';
import Orders from './Vendor/Orderes';
import Dashboard from './Vendor/Dashboard';
import ProductIndex from './Vendor/ProductIndex';
import Forgot from './Forgot';

import VendorInfo from './Vendor/VendorInfo';
import VendorBusiness from './Vendor/VendorBusiness';
import VendorDocumet from './Vendor/VendorDocumet';
import Logisticinfo from './Logisticinfo';
import Logisticbusiness from './Logisticbusiness';
import Logisticdocument from './Logisticdocument';
import Addbutton from './Addbutton';
import OtpScreen from '../screens/otp_screen/OtpScreen.js';
import AddProduct from './Vendor/AddProduct';
import RetailerIndex from './Retailer';

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
      <Stack.Screen name="add_product" component={AddProduct} />
      <Stack.Screen name="productIndex" component={ProductIndex} />
      <Stack.Screen name="vendor" component={VendorInfo} />
      <Stack.Screen name="business" component={VendorBusiness} />
      <Stack.Screen name="document" component={VendorDocumet} />
      <Stack.Screen name="logistic" component={Logisticinfo} />
      <Stack.Screen name="logisbusiness" component={Logisticbusiness} />
      <Stack.Screen name="logisdocument" component={Logisticdocument} />
      <Stack.Screen name="addbutton" component={Addbutton} />
      <Stack.Screen name="otpscreen" component={OtpScreen} />
      <Stack.Screen name="retailerIndex" component={RetailerIndex} />
    </Stack.Navigator>
  );
}
