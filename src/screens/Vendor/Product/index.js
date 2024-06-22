import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Products from './Products';
import AddProduct from './AddProduct';
import AddVariation from './AddVariation';
import ProductVariantAdd from './VariantScreen';

const stack = createNativeStackNavigator();

export default function ProductRoutes() {
  return (
    <stack.Navigator>

{/* testing  */}
<stack.Screen
        name="productVariantAdd"
        component={ProductVariantAdd}
        options={{
          headerShown: true,
          title: 'ADD VARIATIONS',
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
{/* testing  */}


      <stack.Screen
        name="Product"
        component={Products}
        options={{
          headerShown: false,
          title: 'Product',
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
        name="addProduct"
        component={AddProduct}
        options={{
          headerShown: true,
          title: 'ADD PRODUCTS',
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
        name="addVariation"
        component={AddVariation}
        options={{
          headerShown: true,
          title: 'ADD VARIATION',
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

//ProductVariantAdd
