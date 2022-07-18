import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Heart from '../../icons/heart';
import Card from '../../icons/card';
import {useState} from 'react';

let {width} = Dimensions.get('window');

const ProductCard = ({product, navigation}) => {
  const [click, setClick] = useState(false);

  return (
    <View style={styles.productCard}>
      <Image source={{uri: product.images[0].url}} style={styles.image} />
      <View>
        <Text style={styles.productName}>{product.name}</Text>
      </View>
      <View style={styles.productPriceContainer}>
        <Text style={styles.productPriceText}>${product.price}</Text>
        <Text style={styles.offerPriceContainer}>{product.offerPrice}</Text>
        <View style={styles.heartContainer}>
          {click ? (
            <TouchableOpacity>
              <Heart onPress={() => setClick(!click)} fill="crimson" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Heart onPress={() => setClick(!click)} fill="#333" />
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Card />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.outOfStock}>
        <Text>Stock Limited</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    width: width / 2 - 30,
    height: width / 1.7,
    borderRadius: 10,
    elevation: 8,
    backgroundColor: '#e5e5e5',
    flexWrap: 'wrap',
    margin: 10,
  },
  image: {
    width: '100%',
    height: width / 2 - 60,
    resizeMode: 'contain',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  productName: {
    color: '#333',
    paddingVertical: 5,
    textAlign: 'center',
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  productPriceText: {
    color: '#333',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  offerPriceContainer: {
    color: '#333',
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginLeft: -5,
    marginTop: -5,
  },
  heartContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    marginRight: 15,
  },
  outOfStock: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});
