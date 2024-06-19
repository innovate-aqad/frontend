import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from './Dashboard';
import Insights from '../../components/Insights';
import {Image, ScrollView} from 'react-native';
import ProductRoutes from './Product';
import AccountIndex from './Account';
import OrderRoutes from './Order';

const Tab = createBottomTabNavigator();
const product = 'Products';
const dashboard = 'Dashboard';
const account = 'MyAccount';
const insights = 'Insights';
const order = 'Orders';

export default function ProductIndex() {
  
  return (
    <Tab.Navigator
      initialRouteName={dashboard}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === product) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === dashboard) {
            iconName = focused ? 'list' : 'apps';
          } else if (rn === insights) {
            iconName = focused ? 'list' : 'calendar-outline';
          } else if (rn === account) {
            iconName = focused ? 'list' : 'person';
          } else if (rn === order) {
            iconName = focused ? 'list' : 'person';
          }
          if (rn === product) {
            return (
                <Image
                style={{height: 23, width: 23.1,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/drawable-hdpi/box_seam.png')}
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
          } else if (rn === insights) {
            return (
              <Image
                style={{height: 24, width: 24,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../../Assets/image/drawable-hdpi/chart_histogram.png')}
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
      <Tab.Screen name={product} component={ProductRoutes} />
      
      <Tab.Screen name={account} component={AccountIndex} />
      <Tab.Screen name={insights} component={Insights} />
      <Tab.Screen name={order} component={OrderRoutes} />
    </Tab.Navigator>
  );
}

