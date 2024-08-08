import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '_theme/index';
import {CText} from '_components/index';
import Icon from 'react-native-vector-icons/Feather';

const CNumberInput = ({label, value = 0, onChange}) => {
  const handleDecrement = () => {
    onChange(value === 0 ? 0 : value - 1);
  };

  const handleIncrement = () => {
    onChange(value === 50 ? 50 : value + 1);
  };

  return (
    <View style={styles.root}>
      <CText style={styles.label} txt={label} />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleDecrement}
          style={styles.button}>
          <Icon name={'minus'} size={30} color={colors.primaryLight} />
        </TouchableOpacity>
        <CText style={styles.counterText} txt={value.toString()} />
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={handleIncrement}
          style={styles.button}>
          <Icon name={'plus'} size={30} color={colors.primaryLight} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '600',
    marginBottom: 14,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 55,
    width: 55,
    backgroundColor: colors.cardBgColor,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.grey6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: '700',
    color: colors.primaryLight,
  },
  counterText: {
    fontSize: 20,
    width: 40,
    textAlign: 'center',
    color: colors.white,
    marginHorizontal: 10,
    fontWeight: '700',
  },
});

export default CNumberInput;
