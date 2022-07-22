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

const ProductCard = ({product}) => {
  const [click, setClick] = useState(false);

  return (
    <View style={styles.productCard}>
      <Image source={{uri: product.images[0].url}} style={styles.image} />
      <View>
        <Text
          style={{
            color: '#333',
            paddingVertical: 5,
            textAlign: 'center',
          }}>
          {product.name}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <Text style={styles.productPriceText}>${product.price}</Text>
        <Text style={styles.offerPriceContainer}>
          {product.offerPrice.length > 0 ? '$' + product.offerPrice : null}
        </Text>

        <View style={styles.heartContainer}>
          {click ? (
            <TouchableOpacity>
              <Heart onPress={() => setClick(!click)} fill="crimson" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <Heart onPress={() => setClick(!click)} fill="#fff" />
            </TouchableOpacity>
          )}
          {
            <TouchableOpacity>
              <Card onPress={() => setClick(!click)} fill="#333" />
            </TouchableOpacity>
          }
        </View>
      </View>
      {product.Stock === 0 ? (
        <View style={styles.outOfStock}>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              textAlign: 'center',
            }}>
            Stock Limited
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  ProductCard: {
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
  outOfStock: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
