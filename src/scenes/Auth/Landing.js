import * as React from 'react';
import {StyleSheet} from 'react-native';
import Screen from '_scenes/base';
import {CText} from '_components/index';

const LandingScreen = () => {
  return (
    <Screen style={styles.root}>
      <CText txt="Hello to ecommerce" />
    </Screen>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
