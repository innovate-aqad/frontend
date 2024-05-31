import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Buttomtab from '../components';
import Products from './Vendor/Product/Products';
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
import RetailerIndex from './Retailer';
import Datepicker from './Datepicker';
import LogisticIndex from './logistic';
import FlexiTrade from '../components/FlexiTrade';
import OrderList from './OrderDetails/OrderList';
import CardOpen from '../components/VendorCard/CardOpen';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderSummary from './OrderDetails/OrderSummary';
import DriverDetails from './DriverDetails/DriverDetails';
import AddVendor from './FlexiFlat/AddVendor';
// import WareHouseCard from './WareHouseCard';
import OtpScreen from './otp_screen/OtpScreen';
import WareHouseDetails from '../screens/WareHouseDetails/WareHouseDetails';
import PendingOrder from './PendingOrder/PendingOrder';
import PDriverDetails from './PendingOrder/PDriverDetails';
import PMain from '../screens/PendingOrder/PMain';
import SplashScreen from './SplashScreen';
import InventoryList from '../components/VendorCard/CardVendor';

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="bottomTab" component={Buttomtab} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="forgot" component={Forgot} />
      <Stack.Screen name="dashboard" component={Dashboard} />
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
      <Stack.Screen name="logisticIndex" component={LogisticIndex} />
      <Stack.Screen name="logidrivdetail" component={Logidriverdetails} />
      <Stack.Screen name="retailer" component={Retailerinfo} />
      <Stack.Screen name="retailerbusi" component={Retailerbusiness} />
      <Stack.Screen name="reatilerdocs" component={Retailerdocument} />
      <Stack.Screen name="datepick" component={Datepicker} />
      <Stack.Screen name="flexi" component={FlexiTrade} />
      {/* <Stack.Screen name="cardopen" component={OrderList} /> */}
      <Stack.Screen name="cardopen" component={CardOpen} />
      <Stack.Screen name="orderdetails" component={OrderDetails} />
      <Stack.Screen name="ordersummarycard" component={OrderSummary} />
      <Stack.Screen name="driverdetails" component={DriverDetails} />
      <Stack.Screen name="flexiadd" component={AddVendor} />
      <Stack.Screen name="warehousedetails" component={WareHouseDetails} />
      <Stack.Screen name="pending" component={PendingOrder} />
      <Stack.Screen name="pmain" component={PMain} />
    </Stack.Navigator>
  );
}