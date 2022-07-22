import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
import Header from '../components/Loyout/Header';
import {useDispatch, useSelector} from 'react-redux';
import {getProduct} from '../../../Redux/Actions/ProductAction';

const HomeScreen = ({navigation, products}) => {
  const dispatch = useDispatch();

  const {products, error, loading} = useSelector(state => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);
  return (
    <ScrollView>
      <Header navigation={navigation} />
      <Banner />
      <HomeProduct products={products} />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
