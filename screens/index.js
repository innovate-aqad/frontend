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
import Logisticinfo from './logistic/Logisticinfo';
import Logisticbusiness from './logistic/Logisticbusiness';
import Logisticdocument from './logistic/Logisticdocument';
import Addbutton from './Addbutton';
import Logidriverdetails from './logistic/Logidriverdetails';
import Profile from './Vendor/Profile';
import Retailerinfo from './Retailer/Retailerinfo';
import Retailerbusiness from './Retailer/Retailerbusiness';
import Retailerdocument from './Retailer/Retailerdocument';
import AddProduct from './Vendor/AddProduct';
import RetailerIndex from './Retailer';
import OtpScreen from '../otp_screen/OtpScreen';
import Datepicker from './Datepicker';

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
      {/* <Stack.Screen name="vendor" component={Profile} /> */}
      <Stack.Screen name="business" component={VendorBusiness} />
      <Stack.Screen name="document" component={VendorDocumet} />
      <Stack.Screen name="logistic" component={Logisticinfo} />
      <Stack.Screen name="logisbusiness" component={Logisticbusiness} />
      <Stack.Screen name="logisdocument" component={Logisticdocument} />
      <Stack.Screen name="addbutton" component={Addbutton} />
      <Stack.Screen name="otpscreen" component={OtpScreen} />

      <Stack.Screen name="retailerIndex" component={RetailerIndex} />
      <Stack.Screen name="logidrivdetail" component={Logidriverdetails} />
      <Stack.Screen name="retailer" component={Retailerinfo} />
      <Stack.Screen name="retailerbusi" component={Retailerbusiness} />
      <Stack.Screen name="reatilerdocs" component={Retailerdocument} />
      <Stack.Screen name="datepick" component={Datepicker} />
    </Stack.Navigator>
  );
}
