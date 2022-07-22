import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
import Header from '../components/Loyout/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../Redux/Actions/ProductAction';

const HomeScreen = ({navigation}) => {
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
        <View>
          <Header navigation={navigation} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <Banner />
            <HomeProduct products={products} />
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
