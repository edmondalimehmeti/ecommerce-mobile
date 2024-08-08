import React, {useState} from 'react';
import {colors} from '_theme/';
import {TextInput, View, StyleSheet} from 'react-native';
import {CText} from '_components/index';

const CTextInput = ({iref, label, style, ...props}) => {
  const [borderFocusStyle, setBorderFocusStyle] = useState({
    borderColor: colors.grey3,
  });

  return (
    <View style={style}>
      {label && <CText style={styles.label} txt={label} />}
      <View style={[styles.container, borderFocusStyle]}>
        <TextInput
          allowFontScaling={false}
          ref={iref}
          textAlignVertical="top"
          multiline
          style={styles.input}
          placeholderTextColor={colors.grey4}
          onFocus={() => {
            setBorderFocusStyle({
              borderColor: colors.primary,
            });
          }}
          onBlur={() => {
            setBorderFocusStyle({
              borderColor: colors.grey3,
            });
          }}
          {...props}
        />
      </View>
    </View>
  );
};
export default CTextInput;

const styles = StyleSheet.create({
  label: {
    paddingTop: 5,
    marginBottom: 6,
    fontSize: 14,
    color: colors.grey6,
    fontWeight: '600',
  },
  input: {fontSize: 16, color: colors.grey7, flex: 1},
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 7,
    borderWidth: 1,
  },
});
