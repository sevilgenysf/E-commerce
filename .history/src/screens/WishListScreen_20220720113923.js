import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Loyout/Header';

const WishListScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>WishListScreen</Text>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({});
