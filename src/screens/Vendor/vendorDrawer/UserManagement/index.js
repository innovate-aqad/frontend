import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import InventoryManagement from '../../InventoryManagement/InventoryManagement';
import UserList from '../../InventoryManagement/UserList';
import AddUserInfo from '../../InventoryManagement/AddUserInfo';
import EditUser from '../../InventoryManagement/EditUser';

const stack = createNativeStackNavigator();

export default function userManagement() {
  return (
    <stack.Navigator>
      <stack.Screen
        name="userManagement"
        component={InventoryManagement}
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
      />

{/* UserList */}

    </stack.Navigator>
  );
}

//
