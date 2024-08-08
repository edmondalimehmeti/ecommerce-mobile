import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors} from '_theme';

const text = ({txt, onPress, ...props}) => {
  const style = onPress ? dStyles.link : dStyles.default;
  return txt ? (
    <Text style={style} allowFontScaling={false} {...props}>
      {txt}
    </Text>
  ) : (
    <Text allowFontScaling={false} style={style} {...props} />
  );
};

const CText = ({txt, onPress, disabled = false, ...props}) => {
  return onPress ? (
    <TouchableOpacity disabled={!!disabled} onPress={onPress}>
      {text({txt, onPress, ...props})}
    </TouchableOpacity>
  ) : (
    text({txt, onPress, ...props})
  );
};
export default CText;

const dStyles = StyleSheet.create({
  default: {
    fontSize: 16,
    color: colors.black,
  },
  link: {
    fontSize: 16,
    color: colors.primary,
  },
});
