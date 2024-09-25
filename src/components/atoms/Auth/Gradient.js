import React from 'react';
import {colors} from '_theme/index';
import LinearGradient from 'react-native-linear-gradient';

const Gradient = ({children, style}) => {
  return (
    <LinearGradient
      colors={[colors.lightGreen, colors.white]}
      start={{x: 0, y: 0.1}}
      style={style}
      end={{x: 0, y: 0.8}}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
