import React, {useState} from 'react';
import {Screen} from '_scenes/base';
import Header from '_components/chore/Header';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {CButton, CText} from '_components/index';
import {colors} from '_theme/index';

const slides = [
  require('_assets/images/img.png'),
  require('_assets/images/img_1.png'),
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const renderItem = ({item}) => (
  <View>
    <Image source={item} style={{width: SCREEN_WIDTH, height: 340}} />
  </View>
);

const sizes = ['S', 'M', 'L', 'XL'];

const ProductScreen = () => {
  const [product, setProduct] = useState({});
  return (
    <Screen style={styles.root}>
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView>
          <Carousel
            data={slides}
            renderItem={renderItem}
            loop
            autoplay
            autoplayDelay={3000}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={SCREEN_WIDTH}
          />
          <View style={styles.subContainer}>
            <CText txt="DESCRIBE PRODUCT IN TWO LINES" style={styles.title} />
            <View style={styles.sizeContainer}>
              <CText txt="Size" style={styles.sizeLabel} />
              {sizes.map((size) => (
                <TouchableOpacity style={{padding: 10, borderWidth: 1}}>
                  <CText txt={size} style={{fontSize: 14}} />
                </TouchableOpacity>
              ))}
            </View>
            <CButton text="Add to cart" containerStyle={{marginTop: 20}} />
            <View style={{marginTop: 20}}>
              <CText txt="Product Detail" style={styles.title} />
              <CText
                txt="Jacked & Coats by mark and spenser style fall winter boho qualitied for women"
                style={styles.description}
              />
            </View>
            <CText style={styles.seller}>
              <Text>by:</Text>{' '}
              <Text style={{fontWeight: '700'}}>SPIRIT OF FASHION</Text>
            </CText>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {backgroundColor: colors.background, paddingTop: 20, flex: 1},
  subContainer: {marginTop: 20, paddingHorizontal: 20, flex: 1},
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
});

export default ProductScreen;
