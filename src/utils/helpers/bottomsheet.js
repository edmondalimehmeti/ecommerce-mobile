import React from 'react';
import NoInternetConnectionSheet from '_scenes/bottomsheet/noInternetConnection';
import SuccessfulActionModal from '_scenes/bottomsheet/successfulActionModal';
import FailureActionModal from '_scenes/bottomsheet/failureActionModal';

export const availableBottomSheetScreens = {
  NoInternetConnectionSheet: (props) => ({
    content: <NoInternetConnectionSheet {...props} />,
    noHeader: true,
    preventClose: true,
  }),
  SuccessfulActionModal: (props) => ({
    content: <SuccessfulActionModal {...props} />,
    noHeader: true,
  }),
  FailureActionModal: (props) => ({
    content: <FailureActionModal {...props} />,
    noHeader: true,
  }),
};
