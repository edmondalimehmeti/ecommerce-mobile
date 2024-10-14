import {
  AUTH_LOGOUT,
  AUTHENTICATION,
  SHOW_BOTTOM_SHEET,
  HIDE_BOTTOM_SHEET,
  SHOW_GLOBAL_LOADER,
  HIDE_GLOBAL_LOADER,
  ADD_PRODUCT_TO_FAVORITES,
  REMOVE_PRODUCT_FROM_FAVORITES,
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

export const addProductToFavorites = (productId) => ({
  type: ADD_PRODUCT_TO_FAVORITES,
  data: productId,
});
export const removeProductFromFavorites = (productId) => ({
  type: REMOVE_PRODUCT_FROM_FAVORITES,
  data: productId,
});
