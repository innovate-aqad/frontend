import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from '../../components/Header';
import CustomDrawerContent from './CustomDrawerContent';
import SvgUri from 'react-native-svg-uri';
import messages_question from '../../Assets/image/messages_question.svg';
import info from '../../Assets/image/info.svg';

import User_Mnagement from './User_Mnagement';
import Invent_Mnagement from './Invent_Mnagement';
import Dashboard from '../../screens/Retailer/Dashboard';

import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';

const Drawer = createDrawerNavigator();

const userContact = 'user@example.com'; // Replace with actual contact information

export default function Main_App() {
  return (
    <Drawer.Navigator
      initialRouteName="vendordash"
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
      })}>
      {/* bottom tab */}
      <Drawer.Screen
        name="vendordash"
        component={Dashboard}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerItemStyle: {height: 0},
        }}
      />
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
