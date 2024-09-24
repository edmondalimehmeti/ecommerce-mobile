import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '_theme';

const text = ({txt, onPress, style, ...props}) => {
  const defaultStyles = onPress ? dStyles.link : dStyles.default;
  return txt ? (
    <Text style={[defaultStyles, style]} allowFontScaling={false} {...props}>
      {txt}
    </Text>
  ) : (
    <Text allowFontScaling={false} style={[defaultStyles, style]} {...props} />
  );
};

const CText = ({txt, onPress, disabled = false, ...props}) => {
  return onPress ? (
    <TouchableOpacity disabled={!!disabled} onPress={onPress}>
      {text({txt, onPress, ...props})}
    </TouchableOpacity>
  ) : (
    text({txt, style: onPress, ...props})
  );
};
export default CText;

const dStyles = StyleSheet.create({
  default: {
    fontSize: 12,
    color: colors.black,
    fontWeight: '500',
  },
  link: {
    fontSize: 16,
    color: colors.primary,
  },
});
