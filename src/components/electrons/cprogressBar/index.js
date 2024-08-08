import React from 'react';
import {View} from 'react-native';
import {colors} from '_theme/index';

const ProgressBar = ({percentage = 0}) => {
  const blueWidth = `${percentage}%`;
  const grayWidth = `${100 - percentage}%`;

  return (
    <View style={{flexDirection: 'row', height: 4}}>
      <View style={{backgroundColor: colors.primary, width: blueWidth}} />
      <View style={{backgroundColor: colors.grey3, width: grayWidth}} />
    </View>
  );
};

export default ProgressBar;
