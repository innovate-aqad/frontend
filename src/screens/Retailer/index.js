import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Dashboard from './Dashboard';
import Cart from './CartScreen/index';
import WholesalesIndex from './WholesalesPage';
import AccountIndex from './Account';
import Orders from '../Vendor/Order/Orderes';

const Tab = createBottomTabNavigator();
const wholesales = 'Wholesales';
const dashboard = 'Dashboard';
const account = 'My Account';
const cart = 'Cart';
const order = 'Orders';

export default function RetailerIndex() {
  return (
    <Tab.Navigator
      initialRouteName={dashboard}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === wholesales) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === dashboard) {
            iconName = focused ? 'list' : 'apps';
          } else if (rn === cart) {
            iconName = focused ? 'list' : 'calendar-outline';
          } else if (rn === account) {
            iconName = focused ? 'list' : 'person';
          } else if (rn === order) {
            iconName = focused ? 'list' : 'person';
          }
          if (rn === wholesales) {
            return (
                <Image
                style={{height: 23, width: 23.1,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/box_alt.png')}
              />
            );
            
          } else if (rn === dashboard) {
            return (
              <Image
                style={{height: 23, width: 22,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/drawable-hdpi/group_271.png')}
              />
            );
          }
          else if (rn === account) {
            return (
              <Image
                style={{height: 23, width: 17.3,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/drawable-hdpi/user.png')}
              />
            );
          } else if (rn === cart) {
            return (
              <Image
                style={{height: 24, width: 24,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/shopping_cart_1.png')}
              />
            );
          } else {
            return (
              <Image
                style={{height: 24, width: 20,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/drawable-hdpi/memo_pad.png')}
              />
            );
          }
        },

        
        headerShown: false,
        headerTitle: 'Uber',
        headerTitleStyle: {
          fontSize: 30,
        },

        tabBarStyle: {
          height: 60,
          position: 'absolute',
          // borderRadius: 10,
          justifyContent: 'center',
          paddingBottom: 5,
          paddingEnd: 7,
          color: 'black',
          shadowColor: 'black',
        },
        tabBarActiveTintColor: '#F96900',
        
        headerShadowVisible:false
      
        
      })}
      
      // screenOptions={{headerShown: false}}
    >
      <Tab.Screen name={dashboard} component={Dashboard} />
      <Tab.Screen name={wholesales} component={WholesalesIndex} />
      
      <Tab.Screen name={account} component={AccountIndex} />
      
      <Tab.Screen name={order} component={Orders} />
      <Tab.Screen name={cart} component={Cart} />
    </Tab.Navigator>
  );
}

