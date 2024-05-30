import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyAccount from './MyAccount';

const stack = createNativeStackNavigator();

export default function MyAccountRoutes() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="myAccount"
        component={MyAccount}
        options={{
          headerShown: false,
          title: 'My Account',
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
      {/* <stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: 'Login',
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
        name="signup"
        component={Signup}
        options={{
          headerShown: false,
          title: 'Sign Up',
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
      /> */}


      
    </stack.Navigator>
  );
}


// 