import React from 'react';
import {colors} from '_theme/';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  Platform,
} from 'react-native';
import {CText} from '_components/index';
import BackArrowIcon from '_assets/icons/back_arrow.svg';
const screenHeight = Dimensions.get('window').height;

const NumberItem = ({txt, onPress}) => (
  <View style={styles.item}>
    <TouchableHighlight
      style={styles.pad}
      underlayColor={colors.lightGrey}
      onPress={() => onPress(txt)}>
      <CText txt={txt} style={styles.padText} />
    </TouchableHighlight>
  </View>
);

const DeleteItem = ({onPress, onLongPress}) => (
  <View style={styles.item}>
    <TouchableHighlight
      style={styles.pad}
      underlayColor={colors.lightGrey}
      onLongPress={onLongPress}
      onPress={onPress}>
      <BackArrowIcon color={colors.grey6} />
    </TouchableHighlight>
  </View>
);

const CNumericKeyboard = ({value, onChange}) => {
  const change = (txt) => onChange(value + txt);
  const clear = () => onChange(value.substring(0, value.length - 1));
  const clearAll = () => onChange('');

  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <NumberItem txt={'1'} onPress={change} />
        <NumberItem txt={'2'} onPress={change} />
        <NumberItem txt={'3'} onPress={change} />
      </View>
      <View style={styles.row}>
        <NumberItem txt={'4'} onPress={change} />
        <NumberItem txt={'5'} onPress={change} />
        <NumberItem txt={'6'} onPress={change} />
      </View>
      <View style={styles.row}>
        <NumberItem txt={'7'} onPress={change} />
        <NumberItem txt={'8'} onPress={change} />
        <NumberItem txt={'9'} onPress={change} />
      </View>
      <View style={styles.row}>
        <NumberItem txt={'.'} onPress={change} />
        <NumberItem txt={'0'} onPress={change} />
        <DeleteItem onPress={clear} onLongPress={clearAll} />
      </View>
    </View>
  );
};
export default CNumericKeyboard;

const styles = StyleSheet.create({
  root: {paddingVertical: 5},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  pad: {
    width: Platform.select({
      ios: screenHeight > 700 ? 80 : 60,
      android: screenHeight > 700 ? 70 : 60,
    }),
    height: Platform.select({
      ios: screenHeight > 700 ? 80 : 60,
      android: screenHeight > 700 ? 70 : 60,
    }),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    color: colors.grey6,
  },
  padText: {
    fontSize: screenHeight > 700 ? 40 : 30,
    fontWeight: '600',
    color: colors.grey6,
  },
  item: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
