import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AuthScreen from '../src/screens/AuthScreen';
import Tabs from './Tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Drawer.Screen name="Home2" component={Tabs} />
      <Drawer.Screen name="Auth" component={AuthScreen} />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
