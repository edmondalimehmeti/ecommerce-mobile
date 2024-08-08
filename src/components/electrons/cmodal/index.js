import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import BaseBottomSheet from '_scenes/base/baseBottomSheet';
import Modal from 'react-native-modal';
import {colors} from '_theme/index';

const CModal = ({
  show,
  onClose,
  containerStyle = {},
  children,
  preventClose = false,
  ...props
}) => {
  const handleClose = () => (preventClose ? null : onClose());

  return (
    <Modal
      useNativeDriver={false}
      statusBarTranslucent
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      animationInTiming={500}
      animationOutTiming={500}
      avoidKeyboard={true}
      propagateSwipe
      swipeDirection={preventClose ? undefined : 'down'}
      onSwipeComplete={handleClose}
      onBackdropPress={handleClose}
      onRequestClose={handleClose}
      isVisible={show}
      {...props}
      style={styles.root}>
      <BaseBottomSheet style={[styles.container, {...containerStyle}]}>
        {children}
        <SafeAreaView />
      </BaseBottomSheet>
    </Modal>
  );
};
export default CModal;

const styles = StyleSheet.create({
  root: {justifyContent: 'flex-end', margin: 0},
  container: {backgroundColor: colors.white},
});
