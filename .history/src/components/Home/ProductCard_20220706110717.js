import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = ({product}) => {
  console.log(product);
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>Merhaba</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
