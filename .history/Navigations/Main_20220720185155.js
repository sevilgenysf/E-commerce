import {StyleSheet} from 'react-native';
import AuthScreen from '../src/screens/AuthScreen';
import Tabs from './Tabs';
import React, {useState} from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductsScreen from '../src/screens/ProductsScreen';
import WishListScreen from '../src/screens/WishListScreen';
import CardScreen from '../src/screens/CardScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import DrawerItems from '../src/components/Loyout/DrawerItems';
import HomeIcon from '../src/icons/Home';
import Profile from '../src/icons/profile';
import Card from '../src/icons/card';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  const [set, setState] = useState(true);
  return (
    <Drawer.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#3BB77E',
        drawerActiveTintColor: '#FFF',
      }}
      drawerContent={props => <DrawerItems {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Tabs}
        options={{
          drawerIcon: ({color}) => <HomeIcon stroke={color} />,
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          drawerIcon: ({color}) => <HomeIcon stroke={color} />,
        }}
      />
      <Drawer.Screen
        name="WishList"
        component={WishListScreen}
        options={{
          drawerIcon: ({color}) => <HomeIcon stroke={color} />,
        }}
      />
      <Drawer.Screen
        name="Card"
        component={CardScreen}
        options={{
          drawerIcon: ({color}) => <HomeIcon stroke={color} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({color}) => <Profile stroke={color} />,
        }}
      />
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
