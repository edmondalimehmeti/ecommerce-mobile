import React, {useState} from 'react';
import {Screen} from '_scenes/base';
import {ScrollView, StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import Csearchinput from '_components/core/csearchinput';
import Cselect from '_components/core/cselect';
import FilterIcon from '_assets/icons/filter.svg';
import {CText} from '_components/index';
import Header from '_components/chore/Header';

const Search = () => {
  const [condition, setCondition] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState(0);
  return (
    <Screen>
      <Header />
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Cselect data={[]} renderButton={<FilterIcon />} />
          <Cselect data={[]} renderButton={<CText txt="Condition" />} />
          <Cselect data={[]} renderButton={<CText txt="Size" />} />
          <Cselect data={[]} renderButton={<CText txt="Price" />} />
        </View>
        <CText txt="1000+ products found" style={{marginTop: 20}} />
        <ScrollView></ScrollView>
      </View>
    </Screen>
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
});

export default Search;
