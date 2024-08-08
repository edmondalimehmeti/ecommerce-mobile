import {
  AUTH_LOGOUT,
  AUTHENTICATION,
  SHOW_BOTTOM_SHEET,
  HIDE_BOTTOM_SHEET,
  SHOW_GLOBAL_LOADER,
  HIDE_GLOBAL_LOADER,
} from './types';

export const logout = () => ({
  type: AUTH_LOGOUT,
});

export const authentication = (data) => ({
  type: AUTHENTICATION,
  data,
});

export const showBottomSheet = (name, data = {}) => ({
  type: SHOW_BOTTOM_SHEET,
  data: {show: true, name, data},
});

export const showGlobalLoader = () => ({
  type: SHOW_GLOBAL_LOADER,
});

export const hideGlobalLoader = () => ({
  type: HIDE_GLOBAL_LOADER,
});

export const hideBottomSheet = () => ({
  type: HIDE_BOTTOM_SHEET,
});
