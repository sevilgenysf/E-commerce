import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Banner from '../components/Home/Banner';
import HomeProduct from '../components/Home/HomeProduct';
import Header from '../components/Loyout/Header';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <Header />
      <Banner />
      <HomeProduct />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
