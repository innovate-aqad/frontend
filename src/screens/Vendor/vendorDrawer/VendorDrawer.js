import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Header from '../../components/Header';
import CustomDrawerContent from './CustomDrawerContent';
import SvgUri from 'react-native-svg-uri';
import messages_question from '../../../Assets/image/messages_question.svg';
import info from '../../../Assets/image/info.svg';
import EPR_CRM from './EPR_CRM';
import Use_Managemant from './Use_Managemant';
// import Dashboard from '../screens/Vendor/Dashboard';
import {StyleSheet} from 'react-native';
import Header from '../../../components/Header';
import Dashboard from '../Dashboard';

const Drawer = createDrawerNavigator();

const userContact = 'user@example.com'; 

const shouldShowHeader = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  console.log(route.name, 'nameeee======>');
  console.log('Current route:', routeName);
  return routeName === 'bottomTab' || routeName === 'Home' || routeName === 'Insights' ;
};

export default function VendorDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="vendordash"
      drawerContent={props => (
        <CustomDrawerContent {...props} userContact={userContact} />
      )}
      screenOptions={({route,navigation}) => ({
        header: () => <Header navigation={navigation} />,
        drawerStyle: {
          width: '80%',
        },
      })}
      
      
      >
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
