import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import EmailUs from './EmailUs';
import Support from './Support';
import LiveChat from '../LiveChat';

const stack = createNativeStackNavigator();

export default function VendorSupportRoute() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="support"
        component={Support}
        options={{
          headerShown: false,
          title: 'User Management',
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
        name="emailUs"
        component={EmailUs}
        options={{
          headerShown: false,
          title: 'User Management',
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
        name="liveChat"
        component={LiveChat}
        options={{
          headerShown: false,
          title: 'User Management',
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

      {/* LiveChat */}
      {/* <stack.Screen
        name="userList"
        component={UserList}
        options={{
          headerShown: false,
          title: 'USER LIST',
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
        name="addUserInfo"
        component={AddUserInfo}
        options={{
          headerShown: false,
          title: 'ADD USER INFO',
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
        name="editUser"
        component={EditUser}
        options={{
          headerShown: false,
          title: 'EDIT USER',
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

      {/* UserList */}
    </stack.Navigator>
  );
}

//
