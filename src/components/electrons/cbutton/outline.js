import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '_theme/index';
import {CText} from '_components/index';
import CPressable from '_components/chore/CPressable';

const CButtonOutline = ({text, onPress, xs, width, ...props}) => {
  const containerStyles = useMemo(() => {
    const containerWidth = width ? width : '100%';
    let height = 50;
    if (xs) {
      height = 30;
    }
    return {height: height, width: containerWidth};
  }, [width, xs]);

  return (
    <View style={props.containerStyle}>
      <CPressable
        {...props}
        outputMax={0.98}
        activeOpacity={0.8}
        onPress={onPress}
        style={[styles.container, containerStyles]}>
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
    backgroundColor: colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.black,
    borderWidth: 1,
  },
  text: {fontSize: 12, fontWeight: '600'},
  loader: {marginRight: 5},
  row: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
});
