import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from '../../components/Header';
import CustomDrawerContent from './CustomDrawerContent';
import SvgUri from 'react-native-svg-uri';
import messages_question from '../../Assets/image/messages_question.svg';
import info from '../../Assets/image/info.svg';
import feedback_review from '../../Assets/image/feedback_review.svg';
import EPR_CRM from './EPR_CRM';
import Use_Managemant from './Use_Managemant';
import Invent_Management from './Invent_Management';
import Dashboard from '../../screens/Vendor/Dashboard';
import Settings from './Settings';
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
        name="epr"
        component={EPR_CRM}
        options={{
          drawerIcon: () => <SvgUri source={messages_question}></SvgUri>,
          title: 'ERP & CRM Integration',
        }}
      />
      <Drawer.Screen
        name="usermang"
        component={Use_Managemant}
        options={{
          drawerIcon: () => <SvgUri source={info}></SvgUri>,
          title: 'User Management',
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
