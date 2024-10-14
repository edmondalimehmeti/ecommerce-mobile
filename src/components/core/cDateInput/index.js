import React, {useEffect, useState} from 'react';
import {Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CButton, CInput, CTitle} from '_components/index';
import ChevronBottom from '_assets/icons/chevron_bottom.svg';
import {formatDate} from '_utils/helpers/functions';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {colors} from '_theme/index';
import CloseIcon from '_assets/icons/close.svg';
import moment from 'moment';
import CModal from '_components/electrons/cmodal';

const CDateInput = ({
  label,
  placeholder,
  value,
  onChange,
  style,
  dateFormat = 'YYYY-MM-DD',
  pickerText = 'Select date',
  disabled,
  errorText,
  minimumDate,
  ...props
}) => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerValue, setPickerValue] = useState(new Date());

  const openDatePicker = () => {
    Keyboard.dismiss();
    setIsPickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsPickerOpen(false);
  };

  const onConfirm = () => {
    onChange(pickerValue);
    closeDatePicker();
  };

  useEffect(() => {
    if (disabled) {
      setPickerValue(new Date());
      onChange('');
    }
  }, [disabled]);

  useEffect(() => {
    if (minimumDate) {
      setPickerValue(minimumDate);
    }
  }, [minimumDate]);

  return (
    <TouchableOpacity
      style={props.containerStyle}
      onPress={openDatePicker}
      disabled={disabled}>
      <CInput
        label={label}
        placeholder={placeholder}
        value={value && formatDate(value, dateFormat)}
        editable={false}
        style={style}
        disabled={disabled}
        errorText={errorText}
        appendIcon={<ChevronBottom />}
      />
      <CModal
        containerStyle={styles.modalContent}
        show={isPickerOpen}
        onClose={closeDatePicker}>
        <CTitle txt={pickerText} />
        <DatePicker
          style={styles.datePicker}
          mode="date"
          date={pickerValue}
          theme="light"
          onDateChange={(date) => setPickerValue(date)}
          {...props}
        />
        <CButton text="Save" onPress={onConfirm} />
      </CModal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modalContent: {paddingHorizontal: 20},
  datePicker: {alignSelf: 'center', marginVertical: 10},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeContainer: {
    backgroundColor: colors.lightestGrey,
    padding: 6,
    borderRadius: 10,
  },
});

export default CDateInput;
