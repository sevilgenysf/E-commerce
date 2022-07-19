/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShow: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
              }}></View>
          ),
        }}
      />
      <Tab.Screen name="Products" component={ProductsScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
