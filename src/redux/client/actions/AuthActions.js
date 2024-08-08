import {createFetchActionCreator} from '_redux/generic/helper';

const login = (username, password, onSuccess, onError) =>
  createFetchActionCreator(
    'auth/login',
    'login',
    'POST',
    {
      username,
      password,
    },
    onSuccess,
    onError,
  )();

const logout = (refreshToken, deviceToken, onSuccess, onError) =>
  createFetchActionCreator(
    'auth/logout',
    'logout',
    'POST',
    {
      refreshToken,
      deviceToken,
    },
    onSuccess,
    onError,
  )();

export default {
  login,
  logout,
};
