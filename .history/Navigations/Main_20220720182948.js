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
          drawerIcon: ({focused}) => (
            <HomeIcon  onPress={()=> stroke={setState ? '#fff' : 'black'}}/>
          ),
        }}
      />
      <Drawer.Screen name="Products" component={ProductsScreen} />
      <Drawer.Screen name="WishList" component={WishListScreen} />
      <Drawer.Screen name="Card" component={CardScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
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
