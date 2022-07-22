import {StyleSheet} from 'react-native';
import AuthScreen from '../src/screens/AuthScreen';
import Tabs from './Tabs';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreen from '../src/screens/ProductsScreen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Tabs} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
    </Drawer.Navigator>
  );
}

// const Main = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Auth"
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarHideOnKeyboard: true,
//       }}>
//       <Drawer.Screen name="Home" component={Tabs} />
//       <Drawer.Screen name="Auth" component={AuthScreen} />
//     </Drawer.Navigator>
//   );
// };

export default MyDrawer;
