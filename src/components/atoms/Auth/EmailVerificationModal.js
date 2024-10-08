import React, {useState} from 'react';
import {Keyboard, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CButton, CInput, CText, CTitle} from '_components/index';
import {colors} from '_theme/index';
import Modal from 'react-native-modal';
import CloseIcon from '_assets/icons/close.svg';
import useAPI from '_utils/hooks/useAPI';

const EmailVerificationModal = ({visible, onClose, onSuccess, onError}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {makeRequest} = useAPI();
  const [code, setCode] = useState('');

  const deactivateTwoFactorAuth = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await makeRequest('POST', '/auth/deactivate-2fa', {code});
      onSuccess && onSuccess(res);
    } catch (e) {
      onError && onError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isVisible={visible}
      style={styles.root}
      swipeDirection="down"
      avoidKeyboard
      onSwipeComplete={onClose}
      onBackdropPress={onClose}>
      <View style={styles.container}>
        <View style={styles.row}>
          <CTitle txt="Turn off authentication app?" />
          <TouchableOpacity style={styles.closeContainer} onPress={onClose}>
            <CloseIcon color={colors.grey6} />
          </TouchableOpacity>
        </View>
        <CInput
          containerStyles={styles.mt20}
          label="Enter Code"
          value={code}
          onChangeText={(value) => setCode(value)}
          maxLength={6}
          keyboardType="number-pad"
        />
        <CButton
          containerStyle={styles.mt20}
          text="Confirm"
          loading={isLoading}
          disable={code.length < 6}
          onPress={deactivateTwoFactorAuth}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  root: {justifyContent: 'flex-end', margin: 0},
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  closeContainer: {
    backgroundColor: colors.lightestGrey,
    padding: 6,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 10,
  },
  text: {marginTop: 20, fontSize: 16},
  paragraph: {marginTop: 20, fontSize: 16},
  flex1: {flex: 1},
  mt20: {marginTop: 20},
});

export default EmailVerificationModal;
