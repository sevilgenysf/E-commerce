import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeProduct = () => {
  return (
    <View style={styles.bestText}>
      <Text>Best Selling</Text>
    </View>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  bestText: {
    fontSize: 20,
  },
});
