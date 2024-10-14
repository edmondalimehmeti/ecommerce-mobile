import React, {useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CText} from '_components/index';
import Icon from 'react-native-vector-icons/Entypo';
import useReduxSelector from '_utils/hooks/useReduxSelector';
import {useDispatch} from 'react-redux';
import {
  addProductToFavorites,
  removeProductFromFavorites,
} from '_redux/app/actions';

const Item = ({
  item,
  onPress,
  showFavoriteIcon = false,
  imageStyles,
  ...props
}) => {
  const favoriteProducts = useReduxSelector('favorites.products', []);
  const dispatch = useDispatch();
  const isFavoriteProduct = useMemo(
    () => favoriteProducts.some((productId) => productId === item.product_id),
    [favoriteProducts, item],
  );

  const toggleFavoriteProduct = () => {
    if (isFavoriteProduct) {
      dispatch(removeProductFromFavorites(item.product_id));
    } else {
      dispatch(addProductToFavorites(item.product_id));
    }
  };

  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Image
        source={{uri: item.image_urls[0]}}
        style={[styles.image, imageStyles]}
      />
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
  image: {width: '100%', aspectRatio: 1},
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
