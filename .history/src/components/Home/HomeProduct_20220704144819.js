import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

let {width} = Dimensions.get('window');

const HomeProduct = () => {
  const dispatch = useDispatch();

  const {prodects, error, Loading} = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [third]);

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
    padding: 10,
    marginVertical: 10,
  },
  bestText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
  },
});
