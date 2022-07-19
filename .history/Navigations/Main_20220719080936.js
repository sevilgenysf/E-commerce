import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useEffect, useState} from 'react';
import AuthScreen from '../src/screens/AuthScreen';
import Tabs from './Tabs';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Stack.Screen name="Home2" component={Tabs} />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
