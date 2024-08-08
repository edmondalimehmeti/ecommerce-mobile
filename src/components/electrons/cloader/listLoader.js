import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Lottie from '_assets/lottie';
import LottieView from 'lottie-react-native';

const ListLoader = () => {
  return (
    <View style={styles.root}>
      <LottieView style={styles.lottie} source={Lottie.loader} autoPlay loop />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '20%',
  },
  lottie: {width: '80%', height: '80%'},
});

export default ListLoader;
