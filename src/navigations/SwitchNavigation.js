import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountStack from './AccountStack';
import AuthenticationStack from './AuthenticationStack';
import useReduxSelector from '_utils/hooks/useReduxSelector';
// import Workplace from '../workplace';

const RootStack = createNativeStackNavigator();

const SwitchNavigation = () => {
  const isAuthenticated = useReduxSelector('authentication.accessToken', false);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false, headerShown: false}}>
      {isAuthenticated ? (
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
