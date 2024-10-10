import React, {useEffect, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import {CText} from '_components/index';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '_theme/index';
import ProductItem from '_components/atoms/Product/Item';
import Header from '_components/chore/Header';
import useAPI from '_utils/hooks/useAPI';
import {handleRequestErrors} from '_utils/helpers/functions';

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

const HomeScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [topSellerProducts, setTopSellerProducts] = useState([]);
  const {makeRequest} = useAPI();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await makeRequest('GET', '/home');
      setCategories(res.categories);
      setRecommendedProducts(res.recommendedProducts);
      setTopSellerProducts(res.topSellerProducts);
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const goToProduct = (productId) => {
    navigation.navigate('Product', {productId});
  };

  return (
    <SafeAreaViewScreen loading={loading}>
      <Header />
      <ScrollView style={styles.container}>
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
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}>
            {categories.map((item) => (
              <TouchableOpacity>
                <Image
                  source={require('_assets/images/img_1.png')}
                  style={styles.image}
                />
                <CText
                  txt={item.category_name.toUpperCase()}
                  style={styles.categoryName}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <CText txt="RECOMMENDED FOR YOU" style={styles.sectionTitle} />
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            showsHorizontalScrollIndicator={false}
            style={styles.scrollView}>
            {recommendedProducts.map((item) => (
              <ProductItem
                item={item}
                onPress={() => goToProduct(item.product_id)}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <CText txt="TOP SELLER OF THE MONTH" style={styles.sectionTitle} />
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContainer}
            style={styles.scrollView}>
            {topSellerProducts.map((item) => (
              <ProductItem
                item={item}
                onPress={() => goToProduct(item.product_id)}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: colors.background},
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
  scrollViewContainer: {columnGap: 20},
  section: {marginTop: 40, flex: 1},
  image: {width: 150, height: 150, objectFit: 'cover'},
  categoryName: {textAlign: 'center', marginTop: 5, fontWeight: '300'},
});

export default HomeScreen;
