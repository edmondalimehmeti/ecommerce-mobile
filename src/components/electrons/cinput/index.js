import React, {useMemo, useState} from 'react';
import {colors} from '_theme/';
import {TextInput, View, StyleSheet} from 'react-native';
import {CText} from '_components/index';
import ErrorIcon from '_assets/icons/error.svg';

const CInput = ({
  iconName,
  appendIcon = null,
  style,
  label,
  errorText,
  value,
  appendLeftIcon = null,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputContainer = useMemo(() => {
    if (isFocused) {
      return {borderColor: colors.black, backgroundColor: colors.white};
    }
    return {borderColor: colors.grey4, backgroundColor: colors.white};
  }, [isFocused]);

  return (
    <View style={props.containerStyles}>
      {!!label && <CText txt={label} style={styles.label} />}
      <View style={[styles.inputContainer, inputContainer, style]}>
        {appendLeftIcon}
        <TextInput
          allowFontScaling={false}
          style={styles.input}
          placeholderTextColor={colors.black}
          autoCapitalize="none"
          value={value}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {appendIcon}
      </View>
      {errorText && (
        <View style={styles.errorContainer}>
          <ErrorIcon />
          <CText txt={errorText} style={styles.errorText} />
        </View>
      )}
    </View>
  );
};
export default CInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 11,
    paddingVertical: 12,
  },
  label: {
    paddingTop: 5,
    marginBottom: 6,
    fontSize: 14,
    color: colors.grey6,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.grey8,
    padding: 0,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    columnGap: 7,
  },
  errorText: {
    color: colors.errorLight1,
  },
});
