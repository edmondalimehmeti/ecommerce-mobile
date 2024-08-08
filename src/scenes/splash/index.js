import React from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import NoInternetConnection from '_components/chore/noInternetConnection';

const SplashScreen = ({noConnection = false, onPress}) => (
  <View style={styles.root}>
    <StatusBar translucent backgroundColor={'transparent'} />
    {noConnection ? (
      <NoInternetConnection onPress={onPress} />
    ) : (
      <ActivityIndicator size="large" color={colors.white} />
    )}
  </View>
);

export default SplashScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.brandDarkBlue,
  },
});
