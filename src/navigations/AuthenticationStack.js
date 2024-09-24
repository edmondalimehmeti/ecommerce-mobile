import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '_scenes/Auth/Landing';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => (
  <AuthStack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Landing" component={LandingScreen} />
  </AuthStack.Navigator>
);

export default AuthenticationStack;
