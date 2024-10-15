import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '_theme/index';
import {CText} from '_components/index';
import AvatarIcon from '_assets/icons/avatar.svg';
import CartIcon from '_assets/icons/cart.svg';
import HeartIcon from '_assets/icons/heart.svg';
import LogoutIcon from '_assets/icons/logout.svg';
import {useDispatch} from 'react-redux';
import {logout} from '_redux/app/actions';

const Drawer = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <CText txt="Account" style={styles.text} />
      <View style={styles.itemContainer}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Profile')}>
          <AvatarIcon color={colors.black} />
          <CText txt="Profile" style={styles.itemText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Purchase History')}>
          <CartIcon color={colors.black} />
          <CText txt="Purchase History" style={styles.itemText} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <AvatarIcon color={colors.black} />
          <CText txt="Sell History" style={styles.itemText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Favorites')}>
          <HeartIcon color={colors.black} />
          <CText txt="Favorites" style={styles.itemText} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.item}
          onPress={() => dispatch(logout())}>
          <LogoutIcon color={colors.black} />
          <CText txt="Sign Out" style={styles.itemText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
  },
  itemContainer: {
    borderTopWidth: 1,
    marginTop: 20,
  },
  itemText: {fontSize: 18, fontWeight: '300', paddingLeft: 15},
  input: {paddingHorizontal: 60, paddingTop: 10},
  text: {paddingLeft: 20, fontSize: 18, marginTop: 20},
});

export default Drawer;
