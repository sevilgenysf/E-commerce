/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  bottomTabs: {
    backgroundColor: 'red',
  },
});

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShow: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
      style={styles.bottomTabs}>
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
              <Text style={{color: focused ? 'crimson' : 'black'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
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
                source={require('../src/Assets/BottomTab/shop.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 5,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
                Products
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductsScreen}
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
                source={require('../src/Assets/BottomTab/heart.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 5,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
                Products
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
