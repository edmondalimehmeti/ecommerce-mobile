import React, {useEffect, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import Header from '_components/chore/Header';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CButton, CText} from '_components/index';
import {colors} from '_theme/index';
import {handleRequestErrors} from '_utils/helpers/functions';
import useAPI from '_utils/hooks/useAPI';

const SCREEN_WIDTH = Dimensions.get('window').width;
const renderItem = ({item}) => (
  <View>
    <Image source={{uri: item}} style={{width: SCREEN_WIDTH, height: 340}} />
  </View>
);

const sizes = ['S', 'M', 'L', 'XL'];

const ProductScreen = ({route, navigation}) => {
  const [product, setProduct] = useState({});
  const productId = route?.params?.productId;
  const {makeRequest} = useAPI();
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [size, setSize] = useState(null);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await makeRequest('GET', `/products/${productId}`);
      setProduct(res);
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setLoading(false);
    }
  };

  const addToBasket = async () => {
    setAdding(true);
    try {
      const res = await makeRequest('POST', '/cart', {productId, quality: 1});
      console.log(res);
      navigation.navigate('Cart');
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setAdding(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <SafeAreaViewScreen loading={loading}>
      <Header showBackButton />
      <ScrollView style={styles.root}>
        <Carousel
          data={product.image_urls || []}
          renderItem={renderItem}
          loop
          autoplay
          autoplayDelay={3000}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH}
        />
        <View style={styles.subContainer}>
          <CText txt={product.name} style={styles.title} />
          <View style={styles.sizeContainer}>
            <CText txt="Size" style={styles.sizeLabel} />
            {sizes.map((size, index) => (
              <TouchableOpacity
                style={styles.size}
                key={index}
                onPress={() => setSize(size)}>
                <CText txt={size} style={{fontSize: 14}} />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{marginTop: 20}}>
            <CText
              txt={`Condition ${product.condition}`}
              style={styles.condition}
            />
          </View>
          <CButton
            text="Add to basket"
            containerStyle={{marginTop: 20}}
            disable={!!product.in_cart}
            onPress={addToBasket}
            loading={adding}
          />
          <View style={{marginTop: 20}}>
            <CText txt="Product Detail" style={styles.title} />
            <CText txt={product.description} style={styles.description} />
          </View>
          <CText style={styles.seller}>
            <Text>by:</Text>{' '}
            <Text style={{fontWeight: '700'}}>SPIRIT OF FASHION</Text>
          </CText>
        </View>
      </ScrollView>
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  root: {backgroundColor: colors.background, flex: 1},
  subContainer: {
    marginTop: 20,
    paddingBottom: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    flex: 1,
    borderBottomWidth: 2,
  },
  title: {fontWeight: '700', fontSize: 18},
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginTop: 20,
  },
  description: {marginTop: 20, fontSize: 16},
  seller: {marginTop: 20, fontSize: 16},
  sizeLabel: {fontSize: 16},
  condition: {fontSize: 14, fontWeight: '300'},
  size: {padding: 10, borderWidth: 1},
});

export default ProductScreen;
