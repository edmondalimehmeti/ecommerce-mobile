import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '_scenes/Auth/Landing';
import LoginScreen from '_scenes/Auth/Login';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => (
  <AuthStack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Landing" component={LandingScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

export default AuthenticationStack;
