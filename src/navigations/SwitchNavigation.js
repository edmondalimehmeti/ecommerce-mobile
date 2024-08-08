import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountStack from './AccountStack';
import AuthenticationStack from './AuthenticationStack';
import useReduxSelector from '_utils/hooks/useReduxSelector';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
// import Workplace from '../workplace';

const RootStack = createNativeStackNavigator();

const SwitchNavigation = () => {
  const accessToken = useReduxSelector('authentication.access_token', null);
  const hasCompletedOnboarding = useReduxSelector(
    'me.data.has_completed_onboarding',
    false,
  );

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false, headerShown: false}}>
      {accessToken && hasCompletedOnboarding ? (
        <RootStack.Screen
          name="Account"
          component={AccountStack}
          options={{
            animation: 'fade',
            gestureEnabled: false,
          }}
        />
      ) : (
        <RootStack.Screen
          name="Auth"
          component={AuthenticationStack}
          options={{
            animation: 'fade',
          }}
        />
      )}
    </RootStack.Navigator>
  );
};

export default SwitchNavigation;
