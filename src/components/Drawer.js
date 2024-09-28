import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import Csearchinput from '_components/core/csearchinput';
import {CText} from '_components/index';
import AvatarIcon from '_assets/icons/avatar.svg';
import CartIcon from '_assets/icons/cart.svg';
import HeartIcon from '_assets/icons/heart.svg';
import LogoutIcon from '_assets/icons/logout.svg';

const Drawer = ({navigation}) => {
  const [qs, setQs] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Csearchinput
          value={qs}
          onChangeText={setQs}
          containerStyles={{paddingHorizontal: 60, paddingTop: 10}}
        />
      </View>
      <CText
        txt="Account"
        style={{paddingLeft: 20, fontSize: 18, marginTop: 20}}
      />
      <View style={styles.itemContainer}>
        <View style={styles.item}>
          <AvatarIcon color={colors.black} />
          <CText txt="Profile" style={styles.itemText} />
        </View>
        <View style={styles.item}>
          <CartIcon color={colors.black} />
          <CText txt="Buying" style={styles.itemText} />
        </View>
        <View style={styles.item}>
          <AvatarIcon color={colors.black} />
          <CText txt="Selling" style={styles.itemText} />
        </View>
        <View style={styles.item}>
          <HeartIcon color={colors.black} />
          <CText txt="Favorites" style={styles.itemText} />
        </View>
        <View style={styles.item}>
          <LogoutIcon color={colors.black} />
          <CText txt="Sign Out" style={styles.itemText} />
        </View>
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
});

export default Drawer;
