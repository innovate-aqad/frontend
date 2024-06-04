import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-svg';
import MyAccount from './MyAccount';
import PersonalInformation from './PersonalInformation';
import WareHouseDetails from '../../WareHouseDetails/WareHouseDetails';
import CompanyDetail from './CompanyDetail';

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
            borderRadius:20
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
            borderRadius:20
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
        name="warehouse"
        component={WareHouseDetails}
        options={{
          headerShown: true,
          title: 'WAREHOUSE DETAILS',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius:20
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
        name="companyDetails"
        component={CompanyDetail}
        options={{
          headerShown: true,
          title: 'COMPANY DETAILS',
          headerStyle: {
            backgroundColor: '#f4511e',
            borderRadius:20
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}
      />
    </stack.Navigator>
  );
}