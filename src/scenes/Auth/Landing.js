import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Screen} from '_scenes/base';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '_theme/index';
import {CButton, CButtonOutline} from '_components/index';

const LandingScreen = () => {
  return (
    <Screen style={styles.root}>
      <LinearGradient
        colors={[colors.lightGreen, colors.white]}
        style={styles.container}
        start={{x: 0, y: 0.1}}
        end={{x: 0, y: 0.8}}>
        <Image
          source={require('_assets/images/shopping.png')}
          style={{width: 210, height: 308}}
        />
        <View>
          <CButton text="Continue with google" />
          <CButtonOutline text="Continue with email" />
        </View>
      </LinearGradient>
    </Screen>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
