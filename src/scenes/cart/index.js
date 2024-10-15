import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import useAPI from '_utils/hooks/useAPI';
import {handleRequestErrors} from '_utils/helpers/functions';
import CBack from '_components/chore/back';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {CButtonOutline, CText} from '_components/index';
import {colors} from '_theme/index';

const CartScreen = () => {
  const {makeRequest} = useAPI();
  const [cartItems, setCartItems] = useState([]);

  const getData = async () => {
    try {
      const res = await makeRequest('GET', '/cart');
      setCartItems(res);
    } catch (e) {
      handleRequestErrors(e);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  const removeFromCart = async (productId) => {
    try {
      await makeRequest('DELETE', `/cart`, {productId});
      await getData();
    } catch (e) {
      handleRequestErrors(e);
    }
  };

  return (
    <SafeAreaViewScreen style={styles.root}>
      <CBack title="Cart" containerStyle={styles.backButton} />
      <FlatList
        data={cartItems}
        style={styles.productContainer}
        renderItem={({item}) => (
          <View style={styles.product}>
            <Image source={{uri: item.image_url}} style={styles.image} />
            <View style={styles.detailContainer}>
              <CText txt={item.name} style={styles.productName} />
              <CText
                txt={`Quantity ${item.quantity}`}
                style={styles.quantity}
              />
              <CButtonOutline
                xs
                onPress={() => removeFromCart(item.product_id)}
                text="Remove"
                containerStyle={{marginTop: 10}}
              />
            </View>
            <CText txt={`${item.price} €`} style={styles.productPrice} />
          </View>
        )}
      />
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
  quantity: {fontWeight: '300', fontSize: 12, marginTop: 5},
  productPrice: {fontSize: 18, fontWeight: '700'},
  productContainer: {paddingHorizontal: 20},
});

export default CartScreen;
