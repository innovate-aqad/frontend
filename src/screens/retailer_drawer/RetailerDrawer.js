import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import SvgUri from 'react-native-svg-uri';
import messages_question from '../../Assets/image/messages_question.svg';
import info from '../../Assets/image/info.svg';

import User_Mnagement from './User_Mnagement';
import Invent_Mnagement from './Invent_Mnagement';
import Dashboard from '../Retailer/Dashboard';

import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Index from '..';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import RetailerIndex from '../Retailer';
import Header from '../../components/Header';

const Drawer = createDrawerNavigator();

const userContact = 'user@example.com'; 

const shouldShowHeader = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  return (
    routeName === 'retailerIndex' || routeName === 'Dashboard'  
  );
};

export default function RetailerDrawer() {
  return (
    <Drawer.Navigator
    initialRouteName="retailerIndex"
    drawerContent={props => (
      <CustomDrawerContent {...props} userContact={userContact} />
    )}
    screenOptions={({navigation}) => ({
      header: () => <Header navigation={navigation} />,
      drawerStyle: {
        width: '80%',
      },
      // drawerActiveTintColor: '#6200EE', // Customize this to your preferred active color
      // drawerInactiveTintColor: '#000000',
    })}
    // initialRouteName="retailerIndex"
    //   drawerContent={props => (
    //     <CustomDrawerContent {...props} userContact={userContact} />
    //   )}
    //   screenOptions={({route, navigation}) => {
    //     const showHeader = shouldShowHeader(route);

    //     return {
    //       header: () =>
    //         <Header navigation={navigation} /> ,
    //       drawerStyle: {
    //         width: '80%',
    //       },
    //     };
    //   }}
    >


<Drawer.Screen
        name="retailerIndex"
        options={{
          headerShown: false,
        }}
        component={RetailerIndex}
      />

      {/* <Drawer.Screen
        name="dashboard"
        options={{
          headerShown: false,
        }}
        component={Dashboard}
      /> */}

{/* Dashboard */}
      {/* bottom tab */}
      {/* <Drawer.Screen
        name="indexPage"
        options={{
          headerShown: false,
        }}
        component={Index}
      />

      <Drawer.Screen
        name="vendordash"
        component={Dashboard}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerItemStyle: {height: 0},
        }}
      /> */}
      {/* remaining screens */}
      {/* <Drawer.Screen name="Request a Call" component={Requestcall} /> */}
      <Drawer.Screen
        name="invent"
        component={Invent_Mnagement}
        options={{
          drawerIcon: () => <SvgUri source={messages_question}></SvgUri>,
          title: 'invent mng',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="usermang"
        component={User_Mnagement}
        options={{
          drawerIcon: () => <SvgUri source={info}></SvgUri>,
          title: 'User Management',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      {/* <Drawer.Screen
        name="inventory"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Inventory Management',
        }}
      />
      <Drawer.Screen
        name="billing"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Billing & Financial',
        }}
      />
      <Drawer.Screen
        name="logistic"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Logistic & Delivery Tracking',
        }}
      />

      <Drawer.Screen
        name="notifications"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Notification and Alert',
        }}
      />
      <Drawer.Screen
        name="support"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Support',
        }}
      />
      <Drawer.Screen
        name="Rating & Feedback"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Ratings & Feedback',
        }}
      />
      <Drawer.Screen
        name="terms"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Terms & Condition',
        }}
      />
      <Drawer.Screen
        name="settings"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Settings',
        }}
      />
      <Drawer.Screen
        name="logout"
        component={Invent_Management}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Logout',
        }}
      /> */}
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
