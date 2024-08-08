import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CButton, CText, CTitle} from '_components/index';
import {colors} from '_theme/index';
import CloseIcon from '_assets/icons/close.svg';
import {useDispatch} from 'react-redux';
import Success from '_assets/svg/success.svg';
import {hideBottomSheet} from '_redux/app/actions';
import useReduxSelector from '_utils/hooks/useReduxSelector';

const SuccessfulActionModal = () => {
  const dispatch = useDispatch();

  const closeBottomSheet = () => {
    dispatch(hideBottomSheet());
  };

  const subtitle = useReduxSelector('bottomSheetState.data.message', '');

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.closeContainer}
        onPress={closeBottomSheet}>
        <CloseIcon color={colors.grey6} />
      </TouchableOpacity>
      <Success />
      <CTitle txt="Success" style={styles.title} />
      {subtitle && <CText style={styles.subtitle} txt={subtitle} />}
      <CButton
        text="Got it"
        onPress={closeBottomSheet}
        containerStyle={styles.mt30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderRadius: 25,
    padding: 20,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    marginTop: 10,
  },
  closeContainer: {
    backgroundColor: colors.lightestGrey,
    padding: 6,
    borderRadius: 10,
    alignSelf: 'flex-end',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 14,
    color: colors.grey5,
    textAlign: 'center',
    fontWeight: '500',
  },
  mt30: {marginTop: 30},
});

export default SuccessfulActionModal;
