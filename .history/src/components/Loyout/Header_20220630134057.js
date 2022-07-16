import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

let {width} = Dimensions.get('window');
const Header = () => {
  return <View style={styles.headerMain}></View>;
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 3 - 20,
    backgroundColor: '#fff',
  },
});
