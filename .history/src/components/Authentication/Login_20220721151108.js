import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginHeader}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: width * 1 - 20,
    padding: 20,
  },
});
