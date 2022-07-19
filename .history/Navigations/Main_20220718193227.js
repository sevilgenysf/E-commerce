import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import AuthScreen from '../src/screens/AuthScreen';
import React from 'react';
import Tabs from './Tabs';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShow: false,
      }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
