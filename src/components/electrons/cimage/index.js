import React from 'react';
import {Image} from 'react-native';

const CImage = ({...props}) => (
  //<TouchableHighlight {...props}>
  <Image resizeMode={'cover'} {...props} />
  //</TouchableHighlight>
);
export default CImage;
