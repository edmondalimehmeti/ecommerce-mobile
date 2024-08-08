import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '_theme/index';
import CheckboxIcon from '_assets/icons/check.svg';

const CCheckbox = ({isChecked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <View style={[styles.checkbox, isChecked && styles.checked]}>
        {isChecked && (
          <CheckboxIcon width={20} height={20} color={colors.white} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: colors.grey4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: colors.black,
  },
});

export default CCheckbox;
