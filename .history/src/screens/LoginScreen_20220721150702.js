import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Login from '../components/Authentication/Login';

const LoginScreen = () => {
  return (
    <ScrollView>
      <Login />
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
