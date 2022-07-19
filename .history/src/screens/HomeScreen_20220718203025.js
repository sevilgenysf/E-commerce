import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
import {Header} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Banner />
      <HomeProduct />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
