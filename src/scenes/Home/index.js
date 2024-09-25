import React, {useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import Cinput from '_components/electrons/cinput';
import SearchIcon from '_assets/icons/search.svg';
import {CText} from '_components/index';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {colors} from '_theme/index';
import ProductItem from '_components/atoms/Product/Item';

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

const Section = ({name, items = [], item: Item}) => {
  return (
    <View style={{marginTop: 40}}>
      <CText txt={name} style={styles.sectionTitle} />
      <ScrollView
        horizontal
        contentContainerStyle={{columnGap: 10}}
        style={{marginTop: 20, marginHorizontal: 20}}>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [qs, setQs] = useState('');
  const search = () => {
    if (qs.length) {
      navigation.navigate('Search');
    }
  };

  return (
    <SafeAreaViewScreen>
      <Cinput
        containerStyles={{paddingHorizontal: 60, paddingBottom: 10}}
        style={{borderRadius: 20}}
        value={qs}
        onChangeText={setQs}
        onSubmitEditing={search}
        placeholder="Search for ..."
        appendIcon={<SearchIcon />}
      />
      <ScrollView>
        <CText style={styles.headerText}>
          <Text style={{fontFamily: 'Sora Bold'}}>TAKE 10% OFF</Text>{' '}
          <Text style={{fontFamily: 'Sora Regular', fontWeight: '300'}}>
            ON YOUR FIRST ORDER
          </Text>
        </CText>
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
            contentContainerCustomStyle={{marginTop: 20}}
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
        <Section name="SHOP BY CATEGORY" />
        <Section
          name="RECOMMENDED FOR YOU"
          items={[
            {name: 'TEST', image: require('_assets/images/img_1.png')},
            {name: 'TEST', image: require('_assets/images/img_1.png')},
          ]}
          item={ProductItem}
        />
        <Section name="TOP SELLER OF THE MONTH" />
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
});

export default HomeScreen;
