import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import {CText} from '_components/index';
import CPressable from '_components/chore/CPressable';

const CButtonOutline = ({text, onPress, ...props}) => {
  return (
    <View style={props.containerStyle}>
      <CPressable
        {...props}
        outputMax={0.98}
        activeOpacity={0.8}
        onPress={onPress}
        style={styles.container}>
        <View style={styles.row}>
          <CText style={styles.text} txt={text} />
        </View>
      </CPressable>
    </View>
  );
};
export default CButtonOutline;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.grey4,
    borderWidth: 1,
  },
  text: {fontSize: 14, fontWeight: '600'},
  loader: {marginRight: 5},
  row: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
});
