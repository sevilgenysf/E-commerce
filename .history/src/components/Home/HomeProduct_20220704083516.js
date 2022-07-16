import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeProduct = () => {
  return (
    <View>
      <Text style={styles.bestText}>Best Selling</Text>
    </View>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  bestText: {
    fontSize: 20,
    color: '#333',
  },
});
