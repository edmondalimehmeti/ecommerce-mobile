import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CButton, CText} from '_components/index';
import colors from '_theme/colors';
import Lottie from '_assets/lottie';
import {hideBottomSheet} from '_redux/app/actions';
import {useDispatch} from 'react-redux';
import CLottieView from '_components/chore/CLottieView';

const NoInternetConnectionSheet = ({data, ...props}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const checkConnection = async () => {
    await fetch('test').then(({isConnected}) => {
      if (isConnected) {
        dispatch(hideBottomSheet());
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    });
  };

  return (
    <View style={styles.root}>
      <CLottieView
        style={styles.h150}
        source={Lottie.no_internet}
        autoPlay
        loop
      />
      <CText style={styles.title} txt={'Connection Error'} />
      <CText
        style={styles.description}
        txt={
          'No Internet connection! Please connect to mobile data or wifi to proceed'
        }
      />
      <View style={styles.buttonContainer}>
        <CButton
          disable={loading}
          text={loading ? 'Connecting...' : 'Try again'}
          onPress={checkConnection}
        />
      </View>
    </View>
  );
};

export default NoInternetConnectionSheet;

const styles = StyleSheet.create({
  root: {
    height: 350,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 40,
  },
  title: {textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginTop: 10},
  description: {
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    color: colors.grey5,
  },
  buttonContainer: {paddingHorizontal: 50, marginTop: 10},
  h150: {height: 80},
});
