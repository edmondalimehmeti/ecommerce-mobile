import React from 'react';
import {Dimensions, LayoutAnimation, Platform, UIManager} from 'react-native';
import colors from '_theme/colors';
import Toast from 'react-native-toast-message';
import CToast from '_components/electrons/ctoast';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment/moment';

export const showError = (msg = 'Diçka shkoi keq') => {
  Toast.hide();
  Toast.show({
    type: 'error',
    text1: msg,
    visibilityTime: msg?.length > 85 ? 6000 : 4000,
  });
};

export const showSuccess = (msg) => {
  Toast.hide();
  Toast.show({
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
  if (e?.response?.data?.message) {
    showError(e?.response?.data?.message);
  } else if (e?.response?.data?.error) {
    showError(e?.response?.data?.error);
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

export const smallDevice = () => {
  const screenHeight = Dimensions.get('window').height;
  const OSVersion = DeviceInfo?.getSystemVersion() || '';
  if (Platform.OS === 'android') {
    return screenHeight < 650 && OSVersion < 10;
  }

  return screenHeight < 670;
};
