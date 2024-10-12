import React, {useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CText} from '_components/index';
import Icon from 'react-native-vector-icons/Entypo';
import useReduxSelector from '_utils/hooks/useReduxSelector';

const Item = ({item, onPress, showFavoriteIcon = false}) => {
  const favoriteProducts = useReduxSelector('favorites.products', []);

  const isFavoriteProduct = useMemo(
    () => favoriteProducts.some(({productId}) => productId === item.product_id),
    [favoriteProducts, item],
  );

  const toggleFavoriteProduct = () => {
    console.log('test');
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={{uri: item.image_urls[0]}} style={styles.image} />
      <CText txt={item.name} style={styles.name} />
      {item.size && <CText txt={`Size ${item.size}`} style={styles.size} />}
      {item.price && <CText txt={`${item.price} €`} style={styles.price} />}
      {showFavoriteIcon && (
        <Icon
          name={isFavoriteProduct ? 'heart' : 'heart-outlined'}
          size={20}
          style={styles.favoriteIcon}
          onPress={toggleFavoriteProduct}
        />
      )}
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
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Item;
