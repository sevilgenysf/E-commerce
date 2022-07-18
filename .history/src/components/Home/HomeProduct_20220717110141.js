import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import ProductCard from '../Home/ProductCard';
let {width} = Dimensions.get('window');

let {width} = Dimensions.get('window');

const HomeProduct = () => {
  const dispatch = useDispatch();

  const {products, error, loading} = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.bestText}>Best Selling</Text>
          <View style={styles.productCard}>
            {products &&
              products.map(product => {
                return <ProductCard key={product._id} product={product} />;
              })}
          </View>
        </ScrollView>
      )}
    </>
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
