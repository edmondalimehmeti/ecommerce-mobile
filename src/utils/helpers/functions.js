import React from 'react';
import {Dimensions, LayoutAnimation, Platform, UIManager} from 'react-native';
import colors from '_theme/colors';
import Toast from 'react-native-toast-message';
import CToast from '_components/electrons/ctoast';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment/moment';

export const showError = (msg = 'Diçka shkoi keq') => {
  return Toast.show({
    type: 'error',
    text1: msg,
    visibilityTime: msg?.length > 85 ? 6000 : 4000,
  });
};

export const showSuccess = (msg) => {
  return Toast.show({
    type: 'success',
    text1: msg,
    visibilityTime: msg?.length > 85 ? 6000 : 4000,
  });
};

export const showInfo = (msg) => {
  return Toast.show({
    type: 'info',
    text1: msg,
    visibilityTime: msg?.length > 85 ? 6000 : 4000,
  });
};

export const showWarning = (msg) => {
  return Toast.show({
    type: 'warning',
    text1: msg,
    visibilityTime: msg?.length > 85 ? 6000 : 4000,
  });
};

export const showTransparent = (msg) => {
  return Toast.show({
    type: 'transparent',
    text1: msg,
    visibilityTime: msg?.length > 85 ? 6000 : 4000,
  });
};

export const handleValidationErrors = (errors) => {
  if (errors && errors.length > 0) {
    let messageArr = [];
    errors.forEach((error) => {
      messageArr.push(`${error.loc[1]}: ${error.msg}`);
    });
    const message = messageArr.join('\n');
    showError(message);
    return true;
  }

  return false;
};

export const getInitials = (name = '') => {
  if (!name) {
    return '';
  }
  const matchedName = name
    .replaceAll('Ë', 'E')
    .replaceAll('Ç', 'C')
    .match(/\b(\w)/g);
  const acronym = matchedName ? matchedName.join('') : name[0];

  return acronym.substring(0, 2)?.toUpperCase();
};

export const handleRequestErrors = (e) => {
  if (e?.response?.data?.detail && Array.isArray(e?.response?.data?.detail)) {
    handleValidationErrors(e?.response?.data?.detail);
  } else if (e?.response?.data?.detail) {
    showError(e?.response?.data?.detail);
  } else {
    showError('Something went wrong');
  }
};

export const formatDate = (date, format = 'DD/MM/YYYY') => {
  return moment.utc(date).local().format(format);
};

export const testProps = (id) => {
  return {
    testID: id,
    accessibilityLabel: id,
  };
};

export const layoutAnimationY = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  LayoutAnimation.configureNext({
    duration: 400,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.scaleY,
    },
  });
};

export const toastConfig = {
  error: ({text1}) => (
    <CToast
      type={'error'}
      textColor={colors.error}
      backgroundColor={colors.lightRed}
      text1={text1}
    />
  ),
  success: ({text1}) => (
    <CToast
      type={'success'}
      backgroundColor={colors.lightGreen}
      textColor={colors.success}
      text1={text1}
    />
  ),
  info: ({text1}) => (
    <CToast
      type={'info'}
      color={colors.primaryLight}
      text1={text1}
      icon={'information'}
    />
  ),
  warning: ({text1}) => (
    <CToast
      type={'warning'}
      color={colors.attention}
      text1={text1}
      icon={'alert'}
    />
  ),
  transparent: ({text1}) => (
    <CToast
      type={'transparent'}
      color={colors.black75}
      text1={text1}
      containerStyle={styles.transparentToast}
    />
  ),
};

export const smallDevice = () => {
  const screenHeight = Dimensions.get('window').height;
  const OSVersion = DeviceInfo?.getSystemVersion() || '';
  if (Platform.OS === 'android') {
    return screenHeight < 650 && OSVersion < 10;
  }

  return screenHeight < 670;
};

export const formatPhoneNumber = (value) => {
  const cleanedValue = value.replace(/\D/g, '');

  let formattedNumber = '';

  if (cleanedValue.length === 0) {
    formattedNumber = '';
  } else if (cleanedValue.length <= 3) {
    formattedNumber = `(${cleanedValue}`;
  } else if (cleanedValue.length <= 6) {
    formattedNumber = `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(3)}`;
  } else if (cleanedValue.length <= 10) {
    formattedNumber = `(${cleanedValue.slice(0, 3)}) ${cleanedValue.slice(
      3,
      6,
    )}-${cleanedValue.slice(6)}`;
  } else {
    formattedNumber = `${cleanedValue.slice(0, 1)} (${cleanedValue.slice(
      1,
      4,
    )}) ${cleanedValue.slice(4, 7)}-${cleanedValue.slice(7, 11)}`;
  }

  return formattedNumber;
};

export const pairArray = (array) => {
  let pairs = [];
  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1]) {
      pairs.push([array[i], array[i + 1]]);
    } else {
      pairs.push([array[i]]);
    }
  }
  return pairs;
};
