import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Aboutus from './Aboutus';
import FAQ from './FAQ';
import Rating from './Rating';
import Requestcall from './Requestcall';
import Settings from './Settings';
import Buttomtab from '../../components/index';
import Header from '../../components/Header';
import CustomDrawerContent from './CustomDrawerContent';
import WhatsAppMessage from './chatwithus/WhatsAppMessage';
import AqadApp from './chatwithus/AqadApp';
import Contact from './requestacall/Contact';
import Sales from './requestacall/Sales';

import Technical from './requestacall/Technical';
import SvgUri from 'react-native-svg-uri';
import messages_question from '../../Assets/image/messages_question.svg';
import info from '../../Assets/image/info.svg';
import feedback_review from '../../Assets/image/feedback_review.svg';
import settings from '../../Assets/image/settings.svg';

const Drawer = createDrawerNavigator();

const userContact = 'user@example.com'; // Replace with actual contact information

export default function Main_App() {
  return (
    <Drawer.Navigator
      initialRouteName="bottomTab"
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
        name="bottomTab"
        component={Buttomtab}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerItemStyle: {height: 0},
        }}
      />
      {/* remaining screens */}
      {/* <Drawer.Screen name="Request a Call" component={Requestcall} /> */}
      <Drawer.Screen
        name="FAQ'S"
        component={FAQ}
        options={{
          drawerIcon: () => <SvgUri source={messages_question}></SvgUri>,
          title: "FAQ's",
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={Aboutus}
        options={{
          drawerIcon: () => <SvgUri source={info}></SvgUri>,
          title: 'About Us',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Rating & Feedback"
        component={Rating}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review}></SvgUri>,
          title: 'Ratings & Feedbacks',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => <SvgUri source={settings}></SvgUri>,
          title: 'Settings',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      {/* chat with us */}
      <Drawer.Screen
        name="WhatsAppMessage"
        component={WhatsAppMessage}
        options={{drawerLabel: () => null, title: ''}}
      />
      <Drawer.Screen
        name="AQADApp"
        component={AqadApp}
        options={{drawerLabel: () => null, title: ''}}
      />
      {/* Request a call */}
      <Drawer.Screen
        name="tecchnical"
        component={Technical}
        options={{drawerLabel: () => null, title: ''}}
      />

      <Drawer.Screen
        name="sales"
        component={Sales}
        options={{drawerLabel: () => null, title: ''}}
      />

      <Drawer.Screen
        name="contact"
        component={Contact}
        options={{drawerLabel: () => null, title: ''}}
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
