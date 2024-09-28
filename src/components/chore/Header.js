import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '_assets/svg/logo.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Csearchinput from '_components/core/csearchinput';
import {colors} from '_theme/index';

const Header = () => {
  const navigation = useNavigation();
  const [qs, setQs] = useState('');

  const search = () => {
    navigation.navigate('Search');
  };

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Csearchinput value={qs} onChangeText={setQs} onSubmitEditing={search} />
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="bars" size={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 40,
    backgroundColor: colors.white,
  },
});

export default Header;
