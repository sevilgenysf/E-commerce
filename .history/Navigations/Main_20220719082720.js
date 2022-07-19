import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import AuthScreen from '../src/screens/AuthScreen';
import Tabs from './Tabs';

const Main = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Auth" component={AuthScreen} />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
