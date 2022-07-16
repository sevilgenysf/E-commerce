import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Banner from '../components/Home/Banner.js';

const HomeScreen = () => {
  return (
    <View>
      <Banner />
      <HomeProduct />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
