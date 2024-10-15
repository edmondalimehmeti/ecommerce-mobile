import React, {useCallback, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import useReduxSelector from '_utils/hooks/useReduxSelector';
import {CButton, CButtonOutline, CText} from '_components/index';
import {Image, StyleSheet, View} from 'react-native';
import CBack from '_components/chore/back';
import {colors} from '_theme/index';
import {useDispatch} from 'react-redux';
import {removeProductFromFavorites} from '_redux/app/actions';
import useAPI from '_utils/hooks/useAPI';
import {useFocusEffect} from '@react-navigation/native';
import {handleRequestErrors, showSuccess} from '_utils/helpers/functions';

const FavoritesScreen = () => {
  const productIds = useReduxSelector('favorites.products', []);
  const dispatch = useDispatch();
  const {makeRequest} = useAPI();
  const [loading, setLoading] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [products, setProducts] = useState([]);

  const removeFromFavorites = (productId) => {
    dispatch(removeProductFromFavorites(productId));
  };

  const addToCart = async (productId) => {
    setIsAddingToCart(true);
    try {
      const res = await makeRequest('POST', '/cart', {productId, quantity: 1});
      showSuccess(res.message);
      await getData();
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const getData = async () => {};

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [productIds]),
  );

  return (
    <SafeAreaViewScreen style={styles.root} loading={loading}>
      <CBack title="Favorites" containerStyle={styles.backButton} />
      <View style={styles.productContainer}>
        {[...productIds, ...productIds].map((productId) => (
          <View style={styles.product}>
            <Image
              source={require('_assets/images/img_1.png')}
              style={styles.image}
            />
            <View style={styles.detailContainer}>
              <CText
                txt="describe product in two lines"
                style={styles.productName}
              />
              <CText txt="Size M" style={styles.productSize} />
              <CButton
                xs
                text="Add to cart"
                containerStyle={{marginTop: 10}}
                onPress={() => addToCart(productId)}
                loading={isAddingToCart}
              />
              <CButtonOutline
                text="Remove"
                xs
                containerStyle={{marginTop: 10}}
                onPress={() => removeFromFavorites(productId)}
              />
            </View>
            <CText txt="99.99 €" style={styles.productPrice} />
          </View>
        ))}
      </View>
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  root: {backgroundColor: colors.background},
  backButton: {
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingLeft: 20,
  },
  product: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  image: {width: 150, aspectRatio: 1},
  detailContainer: {flex: 1, paddingHorizontal: 10},
  productName: {fontSize: 14, fontWeight: '700'},
  productSize: {fontWeight: '300', fontSize: 12, marginTop: 5},
  productPrice: {fontSize: 18, fontWeight: '700'},
  productContainer: {paddingHorizontal: 20},
});

export default FavoritesScreen;
