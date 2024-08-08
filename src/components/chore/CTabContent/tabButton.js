import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '_theme/';
import {CText} from '_components/';
import {smallDevice} from '_utils/helpers/functions';
import LinearGradient from 'react-native-linear-gradient';

const TabButtonItem = ({txt, onPress, onActivePress, isActive, ...props}) => {
  if (isActive) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onActivePress}
        style={[styles.root, styles.noBorder]}
        {...props}>
        <LinearGradient
          colors={[colors.brandDarkBlue, colors.primary]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.gradient}>
          <CText txt={txt} style={[styles.textCenter, styles.textActive]} />
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.root} {...props}>
      <CText txt={txt} style={styles.textCenter} />
    </TouchableOpacity>
  );
};

export default TabButtonItem;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    borderWidth: 0.7,
    borderColor: colors.brandDarkBlue,
    marginHorizontal: 5,
    height: 35,
  },
  textCenter: {
    textAlign: 'center',
    fontSize: smallDevice() ? 12 : 14,
    color: colors.brandDarkBlue,
    padding: 8,
    height: 33,
  },
  textActive: {color: colors.white},
  gradient: {flex: 1, justifyContent: 'center'},
  noBorder: {borderWidth: 0},
});
