import React, {useMemo} from 'react';
import {Dimensions, Text, View, StyleSheet} from 'react-native';
import colors from '_theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {testProps} from '_utils/helpers/functions';

const screenWidth = Dimensions.get('window').width;

const CToast = ({
  icon,
  backgroundColor,
  textColor = colors.white,
  containerStyle = {},
  text1,
  type,
}) => {
  const style = useMemo(() => {
    return {
      backgroundColor,
      ...containerStyle,
      justifyContent: icon ? 'flex-start' : 'center',
    };
  }, [backgroundColor, containerStyle]);

  const textStyle = useMemo(
    () => ({
      color: textColor,
    }),
    [textColor],
  );

  return (
    <View {...testProps(`toast-${type}`)} style={[styles.root, style]}>
      {icon && (
        <Icon name={icon} size={20} color={colors.white} style={styles.icon} />
      )}
      <Text allowFontScaling={false} style={[styles.text, textStyle]}>
        {text1}
      </Text>
    </View>
  );
};

export default CToast;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: screenWidth - 40,
  },
  icon: {marginRight: 5},
  text: {flexShrink: 1, fontSize: 12, fontWeight: '600'},
});
