import React from 'react';
import {View, Text} from 'react-native';
import Header from './src/components/Loyout/Header';
import HomeScreen from './src/screens/HomeScreen';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigations/Main';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
