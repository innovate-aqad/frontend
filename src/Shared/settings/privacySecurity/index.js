import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import PrivacyPolicy from './PrivacyPolicy';

const stack = createNativeStackNavigator();

export default function PolicyRoutes() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="privacyPolicy"
        component={PrivacyPolicy}
        options={{
          headerShown: false,
          title: 'My Account',
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
