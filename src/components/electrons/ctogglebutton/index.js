import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '_theme/index';
import {CText} from '_components/index';

const CToggleButton = ({options, selected, onSelect}) => {
  return (
    <View style={styles.container}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            option.value === selected && styles.selectedButton,
          ]}
          onPress={() => onSelect(option.value)}>
          <CText
            style={[
              styles.buttonText,
              option === selected && styles.selectedButtonText,
            ]}
            txt={option.label}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: colors.cardBgColor,
    borderWidth: 1,
    borderColor: colors.grey6,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 8,
  },
  selectedButton: {
    backgroundColor: colors.primary,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
  },
  selectedButtonText: {
    fontWeight: 'bold',
  },
});

export default CToggleButton;
