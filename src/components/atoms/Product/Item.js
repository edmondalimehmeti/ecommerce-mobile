import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CText} from '_components/index';

const Item = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: item.image_urls[0]}} style={styles.image} />
      <CText txt={item.name} style={styles.name} />
      {item.size && <CText txt={`Size ${item.size}`} style={styles.size} />}
      {item.price && <CText txt={`${item.price} €`} style={styles.price} />}
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
  size: {fontWeight: '300', marginTop: 2},
});

export default Item;
