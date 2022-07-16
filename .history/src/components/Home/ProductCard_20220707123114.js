import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = ({product}) => {
  return <View style={styles.productCard}></View>;
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    width: width / 2 - 30,
    height: width / 2 - 10,
    borderRadius: 10,
    elevation: 8,
  },
});
