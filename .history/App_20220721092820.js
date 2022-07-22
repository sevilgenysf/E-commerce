import React, {useState} from 'react';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigations/Main';
import Auth from './Navigations/Auth';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {isAuthenticated ? <Main /> : <Auth />}
      </NavigationContainer>
    </Provider>
  );
};

export default App;
