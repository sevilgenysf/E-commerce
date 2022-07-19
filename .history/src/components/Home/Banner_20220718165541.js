import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import React, {useEffect, useState} from 'react';

let {width} = Dimensions.get('window');

const Banner = () => {
  const [BannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://images.unsplash.com/photo-1654115350627-8385ee13453d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1653731415837-16907c4eb3c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      'https://images.unsplash.com/photo-1654120413912-67a2603c115d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={4}
            style={{
              height: width / 2.4,
            }}>
            {BannerData.map(item => {
              return (
                <Image
                  key={item}
                  resizeMode="contain"
                  source={{uri: item}}
                  style={styles.banner}
                />
              );
            })}
          </Swiper>
        </View>
        <View style={{height: 30}}></View>
      </View>
    </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    width: width,
    marginTop: '5%',
    alignItems: 'center',
  },
  banner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});
