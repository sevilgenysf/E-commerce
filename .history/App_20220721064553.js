import React, {useState} from 'react';
import {Provider} from 'react-redux';
import Store from './Redux/Store';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Navigations/Main';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(second);
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
