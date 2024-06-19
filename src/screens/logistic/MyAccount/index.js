import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-svg';
import MyAccount from './MyAccount';
import PersonalInfo from '../../../Shared/MyAccoount/PersonalInfo';
import CompanyDetail from '../../../Shared/MyAccoount/CompanyDetail';
import DriverVehicleList from './DriverVehicleList';
import AddVehicleDetails from './DriverVehicle/AddVehicleDetails';
import AddDriverDetails from './DriverVehicle/AddDriverDetails';
// import PersonalInformation from './PersonalInformation';
// import WareHouseDetails from '../../WareHouseDetails/WareHouseDetails';
// import CompanyDetail from './CompanyDetail';

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
        component={PersonalInfo}
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
      <stack.Screen
        name="driverVehicleList"
        component={DriverVehicleList}
        options={{
          headerShown: false,
          title: 'Driver & Vehicle DETAILS',
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
        name="companyDetails"
        component={CompanyDetail}
        options={{
          headerShown: true,
          title: 'COMPANY DETAILS',
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
        name="addDriverDetails"
        component={AddDriverDetails}
        options={{
          headerShown: true,
          title: 'DRIVER DETAILS',
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
        name="addVehicleDetails"
        component={AddVehicleDetails}
        options={{
          headerShown: true,
          title: 'VEHICLE DETAILS',
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

      {/* AddDriverDetails */}
    </stack.Navigator>
  );
}
