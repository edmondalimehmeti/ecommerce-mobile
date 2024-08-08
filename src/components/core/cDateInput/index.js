import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CButton, CInput, CTitle} from '_components/index';
import ChevronBottom from '_assets/icons/chevron_bottom.svg';
import {formatDate} from '_utils/helpers/functions';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';
import {colors} from '_theme/index';
import CloseIcon from '_assets/icons/close.svg';
import moment from 'moment';

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
      style={style}
      onPress={openDatePicker}
      disabled={disabled}>
      <CInput
        label={label}
        placeholder={placeholder}
        value={value && formatDate(value, dateFormat)}
        editable={false}
        disabled={disabled}
        errorText={errorText}
        appendIcon={<ChevronBottom />}
      />
      <Modal
        backdropOpacity={0.4}
        transparent
        isVisible={isPickerOpen}
        onBackButtonPress={closeDatePicker}
        onBackdropPress={closeDatePicker}
        onSwipeComplete={closeDatePicker}
        swipeDirection="down"
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <CTitle txt={pickerText} />
            <TouchableOpacity
              style={styles.closeContainer}
              onPress={closeDatePicker}>
              <CloseIcon color={colors.grey6} />
            </TouchableOpacity>
          </View>
          <DatePicker
            style={styles.datePicker}
            mode="date"
            date={pickerValue}
            theme="light"
            onDateChange={(date) => setPickerValue(date)}
            {...props}
          />
          <CButton text="Save" onPress={onConfirm} />
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
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
