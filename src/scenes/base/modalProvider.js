import React, {useEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {useDispatch} from 'react-redux';
import {availableBottomSheetScreens} from '_utils/helpers/bottomsheet';
import {hideBottomSheet} from '_redux/app/actions';
import {View, StyleSheet, Platform} from 'react-native';
import useReduxSelector from '_utils/hooks/useReduxSelector';

const ModalProvider = ({children}) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [bottomSheet, setBottomSheet] = useState(null);

  const bottomSheetShow = useReduxSelector('bottomSheetState.show', false);

  const bottomSheetName = useReduxSelector('bottomSheetState.name', null);
  const bottomSheetData = useReduxSelector('bottomSheetState.data', {});

  const closeModal = () => {
    setShow(false);
    dispatch(hideBottomSheet());
  };

  useEffect(() => {
    if (bottomSheetShow) {
      const screen = availableBottomSheetScreens[bottomSheetName];
      setBottomSheet(screen(bottomSheetData));
      setShow(true);
    } else {
      setShow(false);
      // TODO: Test if everything works fine after removing this line
      // setBottomSheet(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bottomSheetShow, JSON.stringify(bottomSheetData), bottomSheetName]);

  return (
    <>
      {children}

      <Modal
        useNativeDriver={false}
        statusBarTranslucent
        deviceHeight={
          Platform.OS === 'android' && bottomSheet?.modal ? '100%' : null
        }
        presentationStyle={'overFullScreen'}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        animationInTiming={500}
        animationOutTiming={500}
        avoidKeyboard={!(bottomSheet && bottomSheet.preventClose)}
        propagateSwipe={!(bottomSheet && bottomSheet.preventClose)}
        swipeDirection={
          bottomSheet &&
          (bottomSheet?.preventClose || bottomSheet?.preventSwipe)
            ? null
            : 'down'
        }
        onSwipeComplete={
          bottomSheet && bottomSheet.preventClose ? null : closeModal
        }
        onBackdropPress={
          bottomSheet && bottomSheet.preventClose ? null : closeModal
        }
        onRequestClose={
          bottomSheet && bottomSheet.preventClose ? null : closeModal
        }
        isVisible={show}
        style={bottomSheet && bottomSheet.modal ? null : styles.modal}>
        {bottomSheet ? <>{bottomSheet.content}</> : <View />}
      </Modal>
    </>
  );
};

export default ModalProvider;

const styles = StyleSheet.create({
  modal: {justifyContent: 'flex-end', margin: 0},
});
