import React, {useEffect} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import {CTitle} from '_components/index';
import useAPI from '_utils/hooks/useAPI';

const CartScreen = () => {
  const {makeRequest} = useAPI();
  const getData = async () => {
    const res = await makeRequest('GET', '/');
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaViewScreen style={{marginHorizontal: 20}}>
      <CTitle txt="Shopping Cart" />
    </SafeAreaViewScreen>
  );
};

export default CartScreen;
