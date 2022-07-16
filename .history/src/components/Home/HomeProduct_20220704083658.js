import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

let {width} = Dimensions.get('window');

const HomeProduct = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bestText}>Best Selling</Text>
    </View>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  bestText: {
    fontSize: 20,
    color: '#333',
  },
});
