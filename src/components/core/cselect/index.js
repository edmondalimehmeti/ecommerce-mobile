import React from 'react';
import {CInput, CText} from '_components/index';
import {View, StyleSheet} from 'react-native';
import {colors} from '_theme/index';
import SelectDropdown from 'react-native-select-dropdown';
import ChevronBottom from '_assets/icons/chevron_bottom.svg';
import _ from 'lodash';

const Cselect = ({
  data = [],
  value,
  onSelect,
  inputLabel,
  inputPlaceholder = 'Select a value',
  labelKey = 'label',
  valueKey = 'value',
  errorText,
  style,
  renderButton,
  ...props
}) => {
  return (
    <View style={style}>
      <SelectDropdown
        data={data}
        dropdownOverlayColor="transparent"
        onSelect={(value) =>
          onSelect(typeof value === 'string' ? value : value[valueKey])
        }
        renderButton={() => (
          <View
            style={{
              borderWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              padding: 10,
              height: 40,
            }}>
            {renderButton}
            <ChevronBottom color={colors.grey4} width={24} />
          </View>
        )}
        renderItem={(selectedItem, index, isSelected) => (
          <View
            style={[
              styles.itemContainer,
              isSelected && {backgroundColor: colors.lightestGrey},
            ]}>
            <CText
              txt={
                typeof selectedItem === 'string'
                  ? selectedItem
                  : selectedItem[labelKey]
              }
              style={{fontWeight: isSelected ? '600' : '400', fontSize: 16}}
            />
          </View>
        )}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: colors.white,
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightestGrey,
  },
});

export default Cselect;
