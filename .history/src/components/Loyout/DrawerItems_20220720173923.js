import {Text, View, Image, TouchableOpacity} from 'react-native';
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
        source={{
          uri: user.avatar.url,
        }}
        style={{
          width: 60,
          height: 60,
          borderRadius: 120,
          marginLeft: 10,
        }}
      />
      <Text style={{color: '#333', fontSize: 16, paddingLeft: 10}}>
        {user.name}
      </Text>

      <DrawerContentScrollView {...props}>
        <View
          style={{
            paddingTop: 10,
          }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 20,
            marginBottom: 20,
          }}
          onPress={logOut}>
          <Text style={{color: '#333', fontSize: 16, paddingLeft: 10}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
