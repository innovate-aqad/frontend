import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-svg';
import MyAccount from './MyAccount';
import PersonalInformation from './PersonalInformation';
import PersonalInfo from '../../../Shared/MyAccoount/PersonalInfo';
import CompanyDetail from '../../../Shared/MyAccoount/CompanyDetail';
import WareHouseDetails from '../../../Shared/MyAccoount/WareHouseDetails/WareHouseDetails';

const stack = createNativeStackNavigator();

export default function AccountIndex() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="myAccount"
        component={MyAccount}
        options={{
          headerShown: false,
          title: 'MY ACCOUNT',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <stack.Screen
        name="personalInfo"
        component={PersonalInformation}
        options={{
          headerShown: true,
          title: 'PERSONAL INFO',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />

      {/* <stack.Screen
        name="outlet"
        component={PersonalInfo}
        options={{
          headerShown: true,
          title: 'Outlet Details',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      /> */}
      <stack.Screen
        name="company"
        component={CompanyDetail}
        options={{
          headerShown: true,
          title: 'Company Details',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
      <stack.Screen
        name="outlet"
        component={WareHouseDetails}
        options={{
          headerShown: true,
          title: 'Outlet Details',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius: 20,
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />

      {/* WareHouseDetails */}
    </stack.Navigator>
  );
}

// PersonalInformation
