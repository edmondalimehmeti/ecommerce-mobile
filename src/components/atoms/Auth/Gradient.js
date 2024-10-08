import React from 'react';
import {colors} from '_theme/index';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native';

const Gradient = ({children, style}) => {
  return (
    <LinearGradient
      colors={[colors.lightGreen, colors.white]}
      start={{x: 0, y: 0.1}}
      style={[{flex: 1}]}
      end={{x: 0, y: 0.8}}>
      <SafeAreaView style={[{flex: 1}, style]}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default Gradient;
