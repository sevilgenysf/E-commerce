import {Text, View, Image} from 'react-native';
import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export default function DrawerItems(props) {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 20,
        margin: 0,
      }}>
      <Image
        source={require('../../Assets/BottomTab/user.jpg')}
        style={{
          width: 60,
          height: 60,
          borderRadius: 120,
          marginLeft: 10,
        }}
      />
      <Text style={{color: '#333', fontSize: 16, paddingLeft: 10}}>
        Yusuf SEVİLGEN
      </Text>
    </View>
  );
}
