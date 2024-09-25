import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CText} from '_components/index';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <CText txt={item.name} style={styles.name} />
      <CText txt="Size L" style={{fontWeight: '300', marginTop: 2}} />
      <CText txt="5.00 €" style={styles.price} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {width: 150, height: 150},
  name: {fontWeight: '700', fontSize: 16, marginTop: 5},
  price: {
    color: '#006349',
    marginTop: 5,
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Item;
