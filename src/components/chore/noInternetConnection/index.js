import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '_theme';
import LottieView from 'lottie-react-native';
import Lottie from '_assets/lottie';
import {CButton, CText} from '_components';

const NoInternetConnection = ({dark = false, onPress, ...props}) => {
  return (
    <View style={styles.root}>
      <View style={styles.p30}>
        <LottieView
          style={styles.h150}
          source={Lottie.no_internet}
          autoPlay
          loop
        />
        <CText
          style={[
            styles.noInternetConnection,
            {color: dark ? colors.grey6 : colors.white},
          ]}
          txt={
            'No Internet connection! Please connect to mobile data or wifi to proceed'
          }
        />
        <CButton text={'Try again'} onPress={onPress} />
      </View>
    </View>
  );
};

export default NoInternetConnection;

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center'},
  p30: {padding: 30},
  h150: {height: 150},
  noInternetConnection: {
    textAlign: 'center',
    paddingVertical: 50,
    fontSize: 17,
  },
});
