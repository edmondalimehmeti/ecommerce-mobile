import React, {useEffect, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import useAPI from '_utils/hooks/useAPI';
import {handleRequestErrors} from '_utils/helpers/functions';
import CBack from '_components/chore/back';
import {StyleSheet} from 'react-native';

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaViewScreen>
      <CBack title="Cart" containerStyle={styles.backButton} />
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  backButton: {
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingLeft: 20,
  },
});

export default CartScreen;
