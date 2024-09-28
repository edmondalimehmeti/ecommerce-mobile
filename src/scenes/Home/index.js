import React, {useEffect, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import {CText} from '_components/index';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '_theme/index';
import ProductItem from '_components/atoms/Product/Item';
import Header from '_components/chore/Header';

const SCREEN_WIDTH = Dimensions.get('window').width;

const slides = [
  require('_assets/images/img.png'),
  require('_assets/images/img_1.png'),
];

const renderItem = ({item}) => (
  <View>
    <Image source={item} style={{width: SCREEN_WIDTH, height: 340}} />
  </View>
);

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const getData = async () => {};

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaViewScreen>
      <Header />
      <ScrollView style={{backgroundColor: colors.background}}>
        <View>
          <Carousel
            data={slides}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
            loop
            autoplay
            autoplayDelay={3000}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH}
          />
          <View style={styles.dotsContainer}>
            {slides.map((item, index) => (
              <View
                style={[
                  styles.dot,
                  [
                    {
                      backgroundColor:
                        index === activeIndex ? colors.black : colors.white,
                    },
                  ],
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.section}>
          <CText txt="SHOP BY CATEGIRY" style={styles.sectionTitle} />
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.scrollView}>
            {products.map((item) => (
              <ProductItem item={item} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <CText txt="RECOMMENDED FOR YOU" style={styles.sectionTitle} />
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.scrollView}>
            {products.map((item) => (
              <ProductItem item={item} />
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <CText txt="TOP SELLER OF THE MONTH" style={styles.sectionTitle} />
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.scrollView}>
            {products.map((item) => (
              <ProductItem item={item} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    columnGap: 10,
  },
  dot: {
    height: 5,
    width: (SCREEN_WIDTH / slides.length) * 0.2,
    borderWidth: 1,
  },
  sectionTitle: {fontSize: 16, fontWeight: '700', textAlign: 'center'},
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  scrollView: {marginTop: 20, marginHorizontal: 20},
  scrollViewContainer: {columnGap: 10},
  section: {marginTop: 40},
});

export default HomeScreen;
