/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import {StyleSheet, Text, View, Image} from 'react-native';
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
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../src/Assets/BottomTab/home.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 5,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen name="Products" component={ProductsScreen} />
    </Tab.Navigator>
  );
};

export default Tabs;
