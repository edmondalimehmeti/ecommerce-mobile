import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '_scenes/Auth/Landing';
import LoginScreen from '_scenes/Auth/Login';
import RegisterScreen from '_scenes/Auth/Register';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => (
  <AuthStack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Landing" component={LandingScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

export default AuthenticationStack;
