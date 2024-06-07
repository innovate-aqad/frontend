import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import {Image, ScrollView} from 'react-native';
import Support from './Support';
import Deliveries from './Deliveries';
import headset from '../../Assets/image/myaccount/headset.svg';
import SvgUri from 'react-native-svg-uri';
import AccountIndex from './MyAccount';

const Tab = createBottomTabNavigator();
const support = 'Support';
const trade = 'Dashboard';

const deliveries = 'Deliveries';
const account = 'My Account';

export default function LogisticIndex() {
  return (
    <Tab.Navigator
      initialRouteName={trade}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === support) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === trade) {
            iconName = focused ? 'list' : 'apps';
          } else if (rn === deliveries) {
            iconName = focused ? 'list' : 'calendar-outline';
          } else if (rn === account) {
            iconName = focused ? 'list' : 'person';
          } else if (rn === order) {
            iconName = focused ? 'list' : 'person';
          }
          if (rn === support) {
            return (
                <SvgUri width={28} height={28} fill={iconName = focused ?"#f96900" :"#cbcbcb"} source={headset} />
            );
            
          } else if (rn === trade) {
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
          }
           else {
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
      <Tab.Screen name={trade} component={Dashboard} />
      <Tab.Screen name={support} component={Support} />
      <Tab.Screen name={deliveries} component={Deliveries} />
      <Tab.Screen name={account} component={AccountIndex} />
      
    </Tab.Navigator>
  );
}

