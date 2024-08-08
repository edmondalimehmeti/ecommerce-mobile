import React from 'react';
import {colors} from '_theme/index';
import {StyleSheet, View} from 'react-native';

const CRadioInput = ({checked}) => {
  return (
    <View
      style={[
        styles.radio,
        {
          borderColor: checked ? colors.black : colors.grey4,
        },
      ]}>
      {checked && <View style={styles.checkedRadio} />}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedRadio: {
    height: 15,
    width: 15,
    borderRadius: 10,
    backgroundColor: colors.black,
  },
});

export default CRadioInput;
