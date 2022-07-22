import {Text, View, Image} from 'react-native';
import React from 'react';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Logout from '../../icons/logout';

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

      <DrawerContentScrollView {...props}>
        <View style={{paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
        <Logout stroke="#333" />
        <Text
          style={{
            color: '#333',
            fontSize: 16,
            paddingLeft: 20,
            marginBottom: 20,
          }}>
          Log out
        </Text>
      </View>
    </View>
  );
}
