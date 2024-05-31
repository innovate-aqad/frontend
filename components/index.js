import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import FlexiTrade from './FlexiTrade';
import MyAccount from './MyAccount';
import Insights from './Insights';
import Entypo from 'react-native-vector-icons/Entypo';
import MarketPlace from './MarketPlace';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();
const home = 'Home';
const trade = 'FlexiTrade';
const account = 'MyAccount';
const insights = 'Insights';
const place = 'MarketPlace';

export default function Buttomtab() {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if (rn === home) {
            iconName = focused ? 'home' : 'home';
          } else if (rn === trade) {
            iconName = focused ? 'list' : 'apps';
          } else if (rn === insights) {
            iconName = focused ? 'list' : 'calendar-outline';
          } else if (rn === account) {
            iconName = focused ? 'list' : 'person';
          } else if (rn === place) {
            iconName = focused ? 'list' : 'person';
          }
          if (rn === home) {
            return (
              <Entypo
                name={iconName}
                size={size}
                color={(iconName = focused ? '#F96900' : color)}
              />
            );
            
          } else if (rn === trade) {
            return (
              <Image
                style={{height: 24, width: 24,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../Assets/image/drawable-hdpi/boxes.png')}
              />
            );
          }
          else if (rn === account) {
            return (
              <Image
                style={{height: 23, width: 17.3,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../Assets/image/drawable-hdpi/user.png')}
              />
            );
          } else if (rn === insights) {
            return (
              <Image
                style={{height: 24, width: 24,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../Assets/image/drawable-hdpi/chart_histogram.png')}
              />
            );
          } else {
            return (
              <Image
                style={{height: 24, width: 24,tintColor:iconName = focused ?"#f96900" :"#cbcbcb"}}
                source={require('../Assets/image/drawable-hdpi/marketplace.png')}
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
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={trade} component={FlexiTrade} />
      <Tab.Screen name={account} component={MyAccount} />
      <Tab.Screen name={insights} component={Insights} />
      <Tab.Screen name={place} component={MarketPlace} />
    </Tab.Navigator>
  );
}