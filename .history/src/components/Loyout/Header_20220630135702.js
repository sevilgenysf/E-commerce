import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Menü from '../../icons/menü';

let {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity>
          <Menü width={34} height={34} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerMain: {
    width: width,
    height: width / 4 - 60,
    backgroundColor: '#fff',
    elevation: 8,
    paddingVertical: 10,
  },
});
