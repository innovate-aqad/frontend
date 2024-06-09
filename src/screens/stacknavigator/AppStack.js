import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Main_App from '../drawer_navigation/Main_App';
import SplashScreen from '../SplashScreen';
import Login from '../Login';
import Signup from '../Signup';
import Products from '../Vendor/Product/Products';
import Orders from '../Vendor/Order/Orderes';
import Forgot from '../Forgot';
import Dashboard from '../Vendor/Dashboard';
import ProductIndex from '../Vendor/ProductIndex';
import VendorInfo from '../Vendor/VendorInfo';
import VendorBusiness from '../Vendor/VendorBusiness';
import VendorDocument from '../Vendor/VendorDocumet';
import OrderDetails from '../OrderDetails/OrderDetails';
const Stack = createStackNavigator();
export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="mainapp" component={Main_App} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="forgot" component={Forgot} />
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="productIndex" component={ProductIndex} />
      <Stack.Screen name="vendor" component={VendorInfo} />
      <Stack.Screen name="business" component={VendorBusiness} />
      <Stack.Screen name="document" component={VendorDocument} />
      {/* <Stack.Screen name="logistic" component={Logisticinfo} />
      <Stack.Screen name="logisbusiness" component={Logisticbusiness} />
      <Stack.Screen name="logisdocument" component={Logisticdocument} />
      <Stack.Screen name="addbutton" component={Addbutton} />
      <Stack.Screen name="otpscreen" component={OtpScreen} />
      <Stack.Screen name="retailerIndex" component={RetailerIndex} />
      <Stack.Screen name="logisticIndex" component={LogisticIndex} />
      <Stack.Screen name="logidrivdetail" component={Logidriverdetails} />
      <Stack.Screen name="retailer" component={Retailerinfo} />
      <Stack.Screen name="retailerbusi" component={Retailerbusiness} />
      <Stack.Screen name="reatilerdocs" component={Retailerdocument} />
      <Stack.Screen name="datepick" component={Datepicker} />
      <Stack.Screen name="flexi" component={FlexiTrade} />
      {/* <Stack.Screen name="cardopen" component={OrderList} /> */}
      {/* <Stack.Screen name="cardopen" component={CardOpen} />
      <Stack.Screen name="orderdetails" component={OrderDetails} />
      <Stack.Screen name="ordersummarycard" component={OrderSummary} />
      <Stack.Screen name="driverdetails" component={DriverDetails} />
      <Stack.Screen name="flexiadd" component={AddVendor} />
      <Stack.Screen name="warehousedetails" component={WareHouseDetails} />
      <Stack.Screen name="pending" component={PendingOrder} />
      <Stack.Screen name="pmain" component={PMain} /> */}
      {/* Inventory Management start */}
      {/* <Stack.Screen
        name="inventoryManagement"
        component={InventoryManagement}
      />
      <Stack.Screen name="addUserInfo" component={AddUserInfo} />
      <Stack.Screen name="userList" component={UserList} />
      <Stack.Screen name="editUser" component={EditUser} />
      Inventory Management end */}
      {/* <Stack.Screen name="piechart" component={Pie_charts} />
      <Stack.Screen name="linechart" component={Line_Chart} />
      <Stack.Screen name="linechartwob" component={Line_Chartwob} />
      <Stack.Screen name="pieapp" component={Pie_App} />  */}
    </Stack.Navigator>
  );
}
