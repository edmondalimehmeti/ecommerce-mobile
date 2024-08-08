import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '_theme/index';
import CloseIcon from '_assets/icons/close.svg';
import {useDispatch} from 'react-redux';
import {hideBottomSheet} from '_redux/app/actions';
import {CButton, CText, CTitle} from '_components/index';
import Failure from '_assets/svg/failure.svg';
import useReduxSelector from '_utils/hooks/useReduxSelector';

const FailureActionModal = () => {
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
      <Failure />
      <CTitle txt="Error" style={styles.title} />
      {subtitle && <CText txt={subtitle} style={styles.subtitle} />}
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

export default FailureActionModal;
