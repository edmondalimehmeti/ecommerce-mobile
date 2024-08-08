import React from 'react';
import {Platform, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '_theme/';
import {CText} from '_components/';
import {smallDevice} from '_utils/helpers/functions';

const TabItem = ({txt, onPress, isActive, ...props}) => {
  const activeStyle = isActive ? colors.white : 'transparent';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isActive}
      style={[styles.tabItem, {backgroundColor: activeStyle}]}
      {...props}>
      <CText txt={txt} style={styles.textCenter} />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabItem: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: Platform.OS === 'ios' ? 6 : 5,
    overflow: 'hidden',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textCenter: {textAlign: 'center', fontSize: smallDevice() ? 12 : 14},
});
