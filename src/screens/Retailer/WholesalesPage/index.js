import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, View} from 'react-native';
import {Text} from 'react-native-svg';
import Wholesales from './Wholesales';
import ProductDetails from './ProductDetails';

const stack = createNativeStackNavigator();

export default function WholesalesIndex() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="wholsales"
        component={Wholesales}
        options={{
          headerShown: true,
          title: 'Wholesales',
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
        name="productDetails"
        component={ProductDetails}
        options={{
          headerShown: true,
          title: 'PRODUCT DETAILS',
          headerStyle: {
            backgroundColor: '#f4511e',
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
