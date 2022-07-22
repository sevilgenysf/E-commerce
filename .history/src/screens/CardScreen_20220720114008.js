import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Loyout/Header';

const CardScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>CardScreen</Text>
    </View>
  );
};

export default CardScreen;

const styles = StyleSheet.create({});
