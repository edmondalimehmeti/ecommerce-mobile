import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '_navigations/navigationService';
import SplashScreen from '_scenes/splash';
import SwitchNavigation from '_navigations/SwitchNavigation';
import ModalProvider from '_scenes/base/modalProvider';

const AppNavigator = () => (
  <NavigationContainer fallback={<SplashScreen />} ref={navigationRef}>
    <ModalProvider>
      <SwitchNavigation />
    </ModalProvider>
  </NavigationContainer>
);

export default AppNavigator;
