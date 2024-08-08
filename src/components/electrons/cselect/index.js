import React, {useCallback, useEffect, useState} from 'react';
import {colors} from '_theme';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CText} from '_components/index';
import SelectModal from '_components/electrons/cselect/modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {testProps} from '_utils/helpers/functions';

const CSelect = ({
  defaultValue,
  onInput,
  options = [],
  style,
  topLabel = false,
  disabled = false,
  objectMode = false,
  hasSubtitle = false,
  titleKey = 'name',
  subtitleFormatter = null,
  valueKey = 'value',
  value,
  testIdPrefix = '',
  prependIcon,
  openFunction,
  ...props
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelect = useCallback(
    (data) => {
      setSelectedValue(data[titleKey]);
      onInput(objectMode ? data : data[valueKey]);
      setShowModal(false);
    },
    [objectMode, onInput, titleKey, valueKey],
  );

  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(
        (option) => option[valueKey] === defaultValue,
      );
      setSelectedValue(defaultOption && defaultOption[titleKey]);
    }
  }, [defaultValue, options, titleKey, valueKey]);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  return (
    <View>
      <SelectModal
        testIdPrefix={testIdPrefix}
        titleKey={titleKey}
        subtitleFormatter={subtitleFormatter}
        hasSubtitle={hasSubtitle}
        options={options}
        show={showModal}
        prependIcon={prependIcon}
        openFunction={openFunction}
        onClose={() => {
          setShowModal(false);
        }}
        onSelect={handleSelect}
      />
      <TouchableOpacity
        disabled={!!disabled}
        style={styles.root}
        {...testProps(`${testIdPrefix}-container`)}
        onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          <CText style={styles.label} txt={props.label} />
          <View style={styles.inputContainer}>
            <CText
              {...testProps(`${testIdPrefix}-text`)}
              style={[styles.input, selectedValue && styles.inputWithValue]}
              txt={selectedValue || props.placeholder}
            />
          </View>
        </View>
        <View style={styles.icon}>
          <Icon name={'chevron-down'} size={22} color={colors.grey6} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CSelect;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: colors.white,
    height: 58,
  },
  container: {flex: 1},
  label: {
    paddingTop: 5,
    fontSize: 12,
    color: colors.grey6,
    fontWeight: '600',
  },
  inputContainer: {flex: 1, justifyContent: 'center'},
  input: {fontSize: 16, color: colors.grey4},
  inputWithValue: {color: colors.grey8},
  icon: {justifyContent: 'center'},
});
