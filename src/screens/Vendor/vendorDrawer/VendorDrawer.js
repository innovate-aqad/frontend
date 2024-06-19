import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import SvgUri from 'react-native-svg-uri';
import messages_question from '../../../Assets/image/messages_question.svg';
import info from '../../../Assets/image/info.svg';
import EPR_CRM from './EPR_CRM';
import Use_Managemant from './Use_Managemant';
import {Image, StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import Dashboard from '../Dashboard';
import ProductIndex from '../ProductIndex';
import InventoryList from '../InventoryManagement/InventoryList';
import { customRed, grayColor } from '../../../constants/Theme';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import inventory_alt from "../../../Assets/image/vendor/inventory_alt.svg"
import settings from "../../../Assets/image/vendor/settings.svg"
import termsCondition from "../../../Assets/image/vendor/termsCondition.svg"
import feedback_review from "../../../Assets/image/vendor/feedback_review.svg"
import support from "../../../Assets/image/vendor/headset.svg"
import bell_ring from "../../../Assets/image/vendor/bell_ring.svg"
import users from "../../../Assets/image/vendor/users.svg"
import box_circle_check from "../../../Assets/image/vendor/box_circle_check.svg"
import usd_circle from "../../../Assets/image/vendor/usd_circle.svg"
import heart_partner_handshake from "../../../Assets/image/vendor/heart_partner_handshake.svg"
import point_of_sale_bill from "../../../Assets/image/vendor/point_of_sale_bill.svg"










import UpcommingScreen from '../../../Shared/UpcommingScreen';

const Drawer = createDrawerNavigator();

const userContact = 'user@example.com';

const shouldShowHeader = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  console.log(route.name, 'nameeee======>');
  console.log('Current route:', routeName);
  return (
    routeName === 'productIndex' ||
    routeName === 'Dashboard' ||
    routeName === 'vendordash'
  );
};

// const showHeader = shouldShowHeader(route);

export default function VendorDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="productIndex"
      drawerContent={props => (
        <CustomDrawerContent {...props} userContact={userContact} />
      )}
      screenOptions={({route, navigation}) => {
        const showHeader = shouldShowHeader(route);

        return {
          header: () =>
            showHeader ? <Header navigation={navigation} /> : null,
          drawerStyle: {
            width: '80%',
          },
        };
      }}
      
      
      >
      <Drawer.Screen
        name="productIndex"
        component={ProductIndex}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerItemStyle: {height: 0},
        }}
      />
      <Drawer.Screen
        name="vendordash"
        component={Dashboard}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerItemStyle: {height: 0},
        }}
      />

<Drawer.Screen
        name="InventoryList"
        component={InventoryList}
        options={{
          drawerIcon: () => <SvgUri source={inventory_alt}></SvgUri>,
          title: 'Inventory Management',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />

      <Drawer.Screen
        name="epr"
        component={EPR_CRM}
        options={{
          drawerIcon: () => <SvgUri source={point_of_sale_bill}></SvgUri>,
          title: 'ERP & CRM Integration',
          drawerLabelStyle: {
            color: grayColor,
          }
        }}
        
      />
      {/* <Drawer.Screen
        name="usermang"
        component={Use_Managemant}
        options={{
          drawerIcon: () => <SvgUri source={info}></SvgUri>,
          title: 'User Management',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      /> */}
      <Drawer.Screen
        name="flexiTrade"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={heart_partner_handshake}></SvgUri>,
          title: 'Flexi Trade',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="billingFinancial"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={usd_circle}></SvgUri>,
          title: 'Billing & Financial',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="logisticDeliveryTracking"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={box_circle_check}></SvgUri>,
          title: 'Logistic & Delivery Tracking',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="userManagement"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={users}></SvgUri>,
          title: 'User Management',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="notificationAlert"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={bell_ring}></SvgUri>,
          title: 'Notification and Alert',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="support"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={support} height={25} width={24}></SvgUri>,
          title: 'Support',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="rattingFeedback"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Ratings & Feedback',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="termsCondition"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={termsCondition} height={20} width={20}></SvgUri>,
          title: 'Terms & Condition',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="settings"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <SvgUri source={settings}></SvgUri>,
          title: 'Settings',
          drawerLabelStyle: {
            color: grayColor,
          },
        }}
      />
      <Drawer.Screen
        name="logout"
        component={UpcommingScreen}
        options={{
          drawerIcon: () => <Image source={require('../../../Assets/image/vendor/power.png')} style={{height:24,width:22}} />,
          title: 'Logout',
          drawerLabelStyle: {
            color: customRed,
          },
        }}
      />
      
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 15,

    fontFamily: 'Poppins-Regular',
    color: '#7e84a3',
  },
});
