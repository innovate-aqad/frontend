import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import FlexiTrade from './FlexiTrade';
import Insights from './Insights';
import Entypo from 'react-native-vector-icons/Entypo';
import {Image} from 'react-native';
import MyAccountRoutes from './Account';
import FeatureRoutes from './Features';
import {black, lightGray, textColorCustom} from '../constants/Theme';

const Tab = createBottomTabNavigator();
const home = 'Home';
const trade = 'FlexiTrade';
const account = 'MyAccount';
const insights = 'Insights';
const place = 'Features';

export default function UniversalButtomtab() {
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
                color={(iconName = focused ? textColorCustom : color)}
              />
            );
          } else if (rn === trade) {
            return (
              <Image
                style={{
                  height: 24,
                  width: 24,
                  tintColor: (iconName = focused ? textColorCustom : lightGray),
                }}
                source={require('../Assets/image/drawable-hdpi/boxes.png')}
              />
            );
          } else if (rn === account) {
            return (
              <Image
                style={{
                  height: 23,
                  width: 17.3,
                  tintColor: (iconName = focused ? textColorCustom : lightGray),
                }}
                source={require('../Assets/image/drawable-hdpi/user.png')}
              />
            );
          } else if (rn === insights) {
            return (
              <Image
                style={{
                  height: 24,
                  width: 24,
                  tintColor: (iconName = focused ? textColorCustom : lightGray),
                }}
                source={require('../Assets/image/drawable-hdpi/chart_histogram.png')}
              />
            );
          } else {
            return (
            <Image
                style={{
                  height: 24,
                  width: 24,
                  tintColor: (iconName = focused ? textColorCustom : lightGray),
                }}
                source={require('../Assets/image/universal/circle-star.png')}
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
          color: black,
          shadowColor: black,
        },
        tabBarActiveTintColor: textColorCustom,

        headerShadowVisible: false,
      })}
      // screenOptions={{headerShown: false}}
    >
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={trade} component={FlexiTrade} />
      <Tab.Screen name={account} component={MyAccountRoutes} />
      <Tab.Screen name={insights} component={Insights} />
      <Tab.Screen name={place} component={FeatureRoutes} />
    </Tab.Navigator>
  );
}
