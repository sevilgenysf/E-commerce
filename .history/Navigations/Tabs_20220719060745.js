/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import ProductsScreen from '../src/screens/ProductsScreen';
import {StyleSheet, Text, View, Image} from 'react-native';
import WishListScreen from '../src/screens/WishListScreen';
import CardScreen from '../src/screens/CardScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
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
                Product
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="wishlist"
        component={WishListScreen}
        options={{
          headerShown: false,
          tabBarBadge: 5,
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
                Wishlist
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="card"
        component={CardScreen}
        options={{
          headerShown: false,
          tabBarBadge: 2,
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../src/Assets/BottomTab/cart.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 5,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>
                CardScreen
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
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
                source={require('../src/Assets/BottomTab/user.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  resizeMode: 'contain',
                  marginTop: 5,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>User</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
