import {View, Text} from 'react-native';
import React from 'react';
import Exp from './src/icons/exp';
import Header from './src/components/Loyout/Header';
import Munü from './src/icons/menü';
const App = () => {
  return (
    <View>
      <Header />
      <Exp />
      <Munü />
    </View>
  );
};

export default App;
