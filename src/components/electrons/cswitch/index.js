import React from 'react';
import {colors} from '_theme/';
import {Switch} from 'react-native';

const CSwitch = ({...props}) => {
  return (
    <Switch
      thumbColor={colors.white}
      trackColor={{
        true: colors.primary,
        false: colors.grey,
      }}
      {...props}
    />
  );
};
export default CSwitch;
