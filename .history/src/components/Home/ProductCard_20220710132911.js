import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

let {width} = Dimensions.get('window');

const ProductCard = ({product}) => {
  return (
    <View style={styles.productCard}>
      <Image source={{uri: product.images[0].url}} style={styles.image} />
      <Text style={styles.productName}>{product.name}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    width: width / 2 - 30,
    height: width / 2 - 10,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: '#e5e5e5',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: width / 2 - 60,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  productName: {
    color: '#333',
    backgroundColor: 'blaxk',
  },
});
