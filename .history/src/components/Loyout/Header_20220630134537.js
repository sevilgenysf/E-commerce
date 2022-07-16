import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Menü from '../../icons/menü';

let {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerMain}>
      <Menü />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 40,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
  },
});
