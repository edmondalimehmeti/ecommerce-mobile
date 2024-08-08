import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '_theme/index';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {CText} from '_components/index';

const CCodeInput = ({iref, cellCount = 4, state}) => {
  const [value, setValue] = state;
  const ref = useBlurOnFulfill({value, cellCount: cellCount});
  const [fprops, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const cellStyle = useMemo(() => {
    return {marginHorizontal: cellCount === 4 ? 10 : 5};
  }, [cellCount]);

  return (
    <CodeField
      ref={iref || ref}
      {...fprops}
      value={value}
      onChangeText={setValue}
      cellCount={cellCount}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View
          key={index}
          style={[styles.cell, cellStyle, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          <CText style={styles.cellText}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </CText>
        </View>
      )}
    />
  );
};

export default CCodeInput;

const styles = StyleSheet.create({
  codeFieldRoot: {margin: 0},
  cell: {
    height: 60,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '500',
    color: colors.grey6,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: colors.primary,
  },
});
