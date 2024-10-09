import React, {useState} from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {CButton, CInput, CText, CTitle} from '_components/index';
import {colors} from '_theme/index';
import useAPI from '_utils/hooks/useAPI';
import CModal from '_components/electrons/cmodal';

const EmailVerificationModal = ({
  visible,
  onClose,
  onSuccess,
  onError,
  email,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {makeRequest} = useAPI();
  const [code, setCode] = useState('');

  const deactivateTwoFactorAuth = async () => {
    Keyboard.dismiss();
    setIsLoading(true);
    try {
      const res = await makeRequest('POST', '/auth/confirm', {
        confirmationCode: code,
        email,
      });
      onSuccess && onSuccess(res);
    } catch (e) {
      onError && onError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CModal containerStyle={styles.container} show={visible} onClose={onClose}>
      <CTitle txt="Enter Verification Code" />
      <CText
        style={styles.subtext}
        txt={`We’ve just sent an email to you at ${email}. Enter the code to verify your account.`}
      />
      <CInput
        containerStyles={styles.mt20}
        label="Enter code"
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
    </CModal>
  );
};

const styles = StyleSheet.create({
  root: {justifyContent: 'flex-end', margin: 0},
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  mt20: {marginTop: 20},
  subtext: {marginTop: 5, color: colors.grey5, fontSize: 16},
});

export default EmailVerificationModal;
