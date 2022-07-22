import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}>
        <Text style={styles.titleTextHeader}>Welcome, Yusuf;</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: width * 1 - 20,
    padding: 20,
  },
  loginHeader: {
    width: width * 1,
  },
  titleTextHeader: {
    fontSize: 30,
    fontWeight: '800',
    fontFamily: 'Roboto',
  },
});
