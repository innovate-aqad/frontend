import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import OrderDetails from './OrderDetails/OrderDetails';
import Order from './Order';

const stack = createNativeStackNavigator();

export default function OrderRoutes() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="order"
        component={Order}
        options={{
          headerShown: false,
          title: 'ORDER',
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
        name="orderDetailRetailer"
        component={OrderDetails}
        options={{
          headerShown: true,
          title: 'ORDER DETAILS',
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
