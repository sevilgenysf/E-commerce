import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Auth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Text>Auth</Text>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({});
