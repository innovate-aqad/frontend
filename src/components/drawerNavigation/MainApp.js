import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import Aboutus from './Aboutus';
import FAQ from './FAQ';
import Rating from './Rating';
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
import { POPPINS } from '../../constants/CustomFontFamily';
import { grayColor } from '../../constants/Theme';

const Drawer = createDrawerNavigator();
const userContact = 'user@example.com'; 

const shouldShowHeader = route => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
  console.log(route.name, 'nameeee');
  console.log('Current route:', routeName);
  return routeName === 'bottomTab' || routeName === 'Home' || routeName === 'Insights' ;
};
// 
export default function MainApp() {
  return (
    <Drawer.Navigator
      initialRouteName="bottomTab"
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
      }}>
      {/* bottom tab */}
      <Drawer.Screen
        name="bottomTab"
        component={Buttomtab}
        options={{
          drawerLabel: () => null,
          title: '',
          drawerItemStyle: {height: 0},
          headerShown: true,
        }}
      />
      {/* remaining screens */}
      <Drawer.Screen
        name="FAQ'S"
        component={FAQ}
        options={{
          drawerIcon: () => <SvgUri source={messages_question} />,
          title: "FAQ's",
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={Aboutus}
        options={{
          drawerIcon: () => <SvgUri source={info} />,
          title: 'About Us',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Rating & Feedback"
        component={Rating}
        options={{
          drawerIcon: () => <SvgUri source={feedback_review} />,
          title: 'Ratings & Feedbacks',
          drawerLabelStyle: styles.drawerLabel,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          drawerIcon: () => <SvgUri source={settings} height={24} width={22} />,
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
        name="technical"
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
    fontFamily: POPPINS.PoppinsRegular,
    color: grayColor,
  },
});
