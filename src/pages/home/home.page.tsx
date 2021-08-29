import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Products from '../products/products.page';
import Cart from '../cart/cart.page';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCart } from '../../core/contexts/cart.context';

const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  const { cart } = useCart();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="store"
        component={Products}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarBadge: cart.length,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Home;
