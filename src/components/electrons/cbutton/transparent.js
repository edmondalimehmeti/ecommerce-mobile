import React from 'react';
import CPressable from '_components/chore/CPressable';
import {StyleSheet, View} from 'react-native';
import {CText} from '_components/index';
import {colors} from '_theme/index';

const CButtonTransparent = ({text, onPress, appendIcon = null, ...props}) => {
  return (
    <View style={props.containerStyle}>
      <CPressable
        {...props}
        outputMax={1.05}
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.container}>
        <View style={styles.row}>
          {appendIcon}
          <CText style={styles.text} txt={text} />
        </View>
      </CPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 55,
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {fontSize: 16, fontWeight: '600', color: colors.primary},
  row: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
});

export default CButtonTransparent;
