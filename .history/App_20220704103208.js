import React from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Loyout/Header';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <View>
      <Header />
      <HomeScreen />
    </View>
  );
};

export default App;
