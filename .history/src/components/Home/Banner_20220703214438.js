import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.swiper}>
            <Swiper
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={4}
              style={{
                height: width / 2,
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
          <View style={{height: 20}}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
