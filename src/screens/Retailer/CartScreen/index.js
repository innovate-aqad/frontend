import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Cart from './Cart';
import Checkout from './Checkout';
import Outlet from './Outlet';
import ProductDetails from '../WholesalesPage/ProductDetails';

const stack = createNativeStackNavigator();

export default function CartScreen() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: true,
          title: 'MY CART',
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

      <stack.Screen
        name="checkout"
        component={Checkout}
        options={{
          headerShown: true,
          title: 'CHECK OUT',
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

      <stack.Screen
        name="outlet"
        component={Outlet}
        options={{
          headerShown: true,
          title: 'SELECT OUTLET',
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

      <stack.Screen
        name="details"
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
            fontFamily: 'Roboto-Bold',
            fontSize: 20,
            
          },
        }}
      />
    </stack.Navigator>
  );
}
