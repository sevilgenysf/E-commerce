import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Menü from '../../icons/menü';
import Search from '../../icons/search';

let {width} = Dimensions.get('window');
const Header = () => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerFlex}>
        <TouchableOpacity>
          <Menü />
        </TouchableOpacity>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={'#333'}
          style={styles.searchBox}
        />
        <TouchableOpacity>
          <Search style={styles.seachIcon} />
        </TouchableOpacity>
      </View>
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
    paddingVertical: 20,
    justifyContent: 'center',
  },
  headerFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBox: {
    width: width - 60,
    height: width / 7 - 20,
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    borderRadius: 30,
    fontSize: 15,
    paddingHorizontal: 15,
  },
});
