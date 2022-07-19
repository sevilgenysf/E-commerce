import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../src/screens/HomeScreen';
import AuthScreen from '../src/screens/AuthScreen';
import React from 'react';

const Main = () => {
  const Stack = createNativeStackNavigator;
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="AuthScreen" component={AuthScreen} />
    </Drawer.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
