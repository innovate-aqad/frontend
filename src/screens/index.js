import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Products from './Vendor/Product/Products';
import Orders from './Vendor/Order/Orderes';
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
import Retailerinfo from './Retailer/Retailerinfo';
import Retailerbusiness from './Retailer/Retailerbusiness';
import Retailerdocument from './Retailer/Retailerdocument';
import RetailerIndex from './Retailer';
import Datepicker from './Datepicker';
import LogisticIndex from './logistic';
import FlexiTrade from '../components/FlexiTrade';
import CardOpen from '../components/VendorCard/CardOpen';
import OrderDetails from './OrderDetails/OrderDetails';
import OrderSummary from './OrderDetails/OrderSummary';
import DriverDetails from './DriverDetails/DriverDetails';
import AddVendor from './FlexiFlat/AddVendor';
import WareHouseDetails from '../screens/WareHouseDetails/WareHouseDetails';
import PendingOrder from './PendingOrder/PendingOrder';
import PMain from '../screens/PendingOrder/PMain';
import SplashScreen from './SplashScreen';
import InventoryManagement from './Vendor/InventoryManagement/InventoryManagement';
import AddUserInfo from './Vendor/InventoryManagement/AddUserInfo';
import UserList from './Vendor/InventoryManagement/UserList';
import EditUser from './Vendor/InventoryManagement/EditUser';
import UniversalButtomtab from '../components';
import InventoryLists from './Vendor/InventoryManagement/InventoryList';
import TextLine from '../Shared/TextLine';
import SettingHome from '../Shared/settings/SettingHome';
import ChangePassword from '../Shared/settings/ChangePassword';
import VerificationOTP from '../Shared/settings/VerificationOTP';
import SetNewPassword from '../Shared/settings/SetNewPassword';
import PassChangeSuccess from '../Shared/settings/PassChangeSuccess';
import GetStarted from '../Shared/settings/twoFactors/GetStarted';
import Continue from '../Shared/settings/twoFactors/Continue';
import VerifyEnable from '../Shared/settings/twoFactors/VerifyEnable';
import SuccessAuthontication from '../Shared/settings/twoFactors/SuccessAuthontication';
import MainApp from '../components/drawerNavigation/MainApp';
import OtpVerify from './OtpVerify';
import VendorDrawer from './Vendor/vendorDrawer/VendorDrawer';
import Support from '../RemainingPageSetup/Support';
import RattingReview from '../RemainingPageSetup/RattingReview';
import Appearance from '../Shared/settings/Appearane';
import Notification from '../pages/Notification';
import VerifyPassword from './VerifyPassword/VerifyPassword';
import EditProduct from './EditProduct/EditProduct';
import EditProductVariant from './EditProductVariant/EditProductVariant';
import OtpScreen from './otp_screen/OtpScreen';
import SearchFilter from './Vendor/SearchFilter';
import ProductFilter from './Vendor/SearchFilter/ProductFilter';
import RetailerDrawer from './retailer_drawer/RetailerDrawer';

export default function Index() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="mainapp" component={MainApp} />
      <Stack.Screen name="VendorDrawer" component={VendorDrawer} />
      <Stack.Screen name="retailerDrawer" component={RetailerDrawer} />

      <Stack.Screen name="universalButtomtab" component={UniversalButtomtab} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="orders" component={Orders} />
      <Stack.Screen name="forgot" component={Forgot} />
      <Stack.Screen name="verifypassword" component={VerifyPassword} />
      <Stack.Screen name="dashboard" component={Dashboard} />
      {/* <Stack.Screen name="productIndex" component={ProductIndex} /> */}
      <Stack.Screen name="vendor" component={VendorInfo} />
      <Stack.Screen name="business" component={VendorBusiness} />
      <Stack.Screen name="document" component={VendorDocumet} />
      <Stack.Screen name="logistic" component={Logisticinfo} />
      <Stack.Screen name="logisbusiness" component={Logisticbusiness} />
      <Stack.Screen name="logisdocument" component={Logisticdocument} />
      <Stack.Screen name="addbutton" component={Addbutton} />
      <Stack.Screen name="otpscreen" component={OtpScreen} />
      {/* <Stack.Screen name="retailerIndex" component={RetailerIndex} /> */}
      <Stack.Screen name="logisticIndex" component={LogisticIndex} />
      <Stack.Screen name="logidrivdetail" component={Logidriverdetails} />
      <Stack.Screen name="retailer" component={Retailerinfo} />
      <Stack.Screen name="retailerbusi" component={Retailerbusiness} />
      <Stack.Screen name="reatilerdocs" component={Retailerdocument} />
      <Stack.Screen name="datepick" component={Datepicker} />
      <Stack.Screen name="flexi" component={FlexiTrade} />
      <Stack.Screen name="cardopen" component={CardOpen} />
      <Stack.Screen name="orderdetails" component={OrderDetails} />
      <Stack.Screen name="ordersummarycard" component={OrderSummary} />
      <Stack.Screen name="driverdetails" component={DriverDetails} />
      <Stack.Screen name="flexiadd" component={AddVendor} />
      <Stack.Screen name="warehousedetails" component={WareHouseDetails} />
      <Stack.Screen name="pending" component={PendingOrder} />
      <Stack.Screen name="pmain" component={PMain} />
      <Stack.Screen name="editProduct" component={EditProduct} />
      <Stack.Screen name="editProductVariant" component={EditProductVariant} />

      {/* Inventory Management start */}
      <Stack.Screen name="inventoryLists" component={InventoryLists} />
      <Stack.Screen name="textLine" component={TextLine} />
      {/* Inventory Management end */}
      {/* setting page start */}
      <Stack.Screen name="setting" component={SettingHome} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
      <Stack.Screen name="verificationOTP" component={VerificationOTP} />
      <Stack.Screen name="setNewPassword" component={SetNewPassword} />
      <Stack.Screen name="passChangeSuccess" component={PassChangeSuccess} />

      <Stack.Screen name="getStarted" component={GetStarted} />
      <Stack.Screen name="continue" component={Continue} />
      <Stack.Screen name="verifyEnable" component={VerifyEnable} />
      <Stack.Screen
        name="successAuthontication"
        component={SuccessAuthontication}
      />

      <Stack.Screen name="appearance" component={Appearance} />

      {/* setting page end */}

      {/* remaining page start */}
      <Stack.Screen name="support" component={Support} />
      <Stack.Screen name="rattingReview" component={RattingReview} />
      {/* remaining page end Support */}

      {/* Notification screen start */}
      <Stack.Screen name="notification" component={Notification} />
      {/* Notification screen end */}



      {/* search and filter start screen */}
      {/* SearchFilter */}
      <Stack.Screen name="searchFilter" component={SearchFilter} />
      <Stack.Screen name="productFilter" component={ProductFilter} />
      {/* search and filter end screen */}
    </Stack.Navigator>
  );
}
