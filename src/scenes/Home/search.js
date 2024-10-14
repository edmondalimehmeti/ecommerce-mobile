import React, {useContext, useEffect, useRef, useState} from 'react';
import {SafeAreaViewScreen} from '_scenes/base';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import Cselect from '_components/core/cselect';
import FilterIcon from '_assets/icons/filter.svg';
import {CText} from '_components/index';
import Header from '_components/chore/Header';
import {QueryStringContext} from '_utils/providers/QueryStringProvider';
import useAPI from '_utils/hooks/useAPI';
import ProductItem from '_components/atoms/Product/Item';
import {handleRequestErrors} from '_utils/helpers/functions';
import {stringify} from 'query-string/base';

const Search = ({navigation}) => {
  const [qs, setQs] = useState('');
  const [condition, setCondition] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  const [results, setResults] = useState([]);
  const {makeRequest} = useAPI();
  const [loading, setLoading] = useState(false);
  const {queryString} = useContext(QueryStringContext);

  const getData = async () => {
    setLoading(true);
    try {
      const params = stringify({term: queryString});
      const res = await makeRequest('GET', `/products/search?${params}`);
      setResults(res);
    } catch (e) {
      handleRequestErrors(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const goToProductScreen = (productId) => {
    navigation.push('Product', {productId});
  };

  return (
    <SafeAreaViewScreen loading={loading}>
      <Header showBackButton />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Cselect data={[]} renderButton={<FilterIcon />} />
          <Cselect data={[]} renderButton={<CText txt="Condition" />} />
          <Cselect data={[]} renderButton={<CText txt="Size" />} />
          <Cselect data={[]} renderButton={<CText txt="Price" />} />
        </View>
        <CText
          txt={`${results.length} ${
            results.length === 1 ? 'product' : 'products'
          } found`}
          style={{marginTop: 20}}
        />
        <FlatList
          data={results}
          numColumns={2}
          style={{marginTop: 20}}
          renderItem={({item}) => (
            <ProductItem
              item={item}
              showFavoriteIcon
              style={{flex: 1}}
              imageStyles={{width: results.length > 1 ? '100%' : '50%'}}
              onPress={() => goToProductScreen(item.product_id)}
            />
          )}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{rowGap: 10}}
        />
      </View>
    </SafeAreaViewScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: colors.background,
  },
  filterContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  row: {
    justifyContent: 'space-between',
    columnGap: 10,
  },
});

export default Search;
