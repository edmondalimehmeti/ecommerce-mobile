import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from '_navigations/index';
import Toast from 'react-native-toast-message';
import {CLoader} from '_components/index';
import useReduxSelector from '_utils/hooks/useReduxSelector';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const RootScreen = () => {
  const showLoader = useReduxSelector('globalLoaderState.show', false);
  const {top} = useSafeAreaInsets();

  return (
    <GestureHandlerRootView style={styles.flex1}>
      <AppNavigator />
      <Toast topOffset={top} setRef={Toast.setRootRef} />
      <CLoader loading={showLoader} />
    </GestureHandlerRootView>
  );
};

export default RootScreen;

const styles = StyleSheet.create({
  flex1: {flex: 1},
  animation: {
    position: 'absolute',
    zIndex: 1002,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: -20,
  },
});
