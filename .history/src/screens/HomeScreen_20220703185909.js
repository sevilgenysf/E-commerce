import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const HomeScreen = () => {
  const [BannerData, setBannerData] = useState;

  useEffect(() => {
    setBannerData([
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
