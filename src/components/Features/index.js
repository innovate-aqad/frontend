import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import FeatureMain from './FeatureMain';
import RetailFeatures from './RetailFeatures';
import VendorFeatures from './VendorFeatures';

const stack = createNativeStackNavigator();

export default function FeatureRoutes() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Feature"
        component={FeatureMain}
        options={{
          headerShown: false,
          title: 'Feature',
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
        name="retailer"
        component={RetailFeatures}
        options={{
          headerShown: false,
          title: 'Retailer',
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
        name="vendor"
        component={VendorFeatures}
        options={{
          headerShown: false,
          title: 'Vensor',
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

     
    </stack.Navigator>
  );
}

//
