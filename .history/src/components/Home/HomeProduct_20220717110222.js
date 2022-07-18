import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import ProductCard from '../Home/ProductCard';
let {width} = Dimensions.get('window');

const HomeProduct = ({products, navigation}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          color: '#333',
          textAlign: 'center',
        }}>
        Best Selling
      </Text>
      <View style={styles.productCard}>
        {products &&
          products.map(product => (
            <ProductCard
              key={product._id}
              product={product}
              navigation={navigation}
            />
          ))}
      </View>
    </View>
  );
};

export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    width: width,
    padding: 10,
    marginVertical: 10,
    marginBottom: width / 6 - 5,
  },
  bestText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
  productCard: {
    width: width * 1 - 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
