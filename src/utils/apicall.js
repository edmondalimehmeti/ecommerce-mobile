import axios from 'axios';
import {API_URL} from '../config';
import _ from 'lodash';
import {logout} from '_redux/app/actions';
import NavigationService from '_navigations/navigationService';

export default async (
  method,
  url,
  data,
  getState = null,
  dispatch,
  additionalHeaders,
) => {
  const API = axios.create({
    baseURL: API_URL,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 120000,
  });

  const getAuth = () => {
    const state = getState();
    const accessToken = _.get(state, 'authentication.accessToken', null);
    if (!accessToken) {
      return null;
    }

    return `Bearer ${accessToken}`;
  };

  const logoutAndNavigate = () => {
    NavigationService.navigateAndReset('Account');
    dispatch(logout());
  };

  API.interceptors.request.use(
    (config) => {
      const auth = getAuth();

      if (auth) {
        config.headers.Authorization = auth;
      }

      config.headers = {...config.headers, ...additionalHeaders};
      return config;
    },
    async () => {
      logoutAndNavigate();
    },
  );

  API.interceptors.response.use(
    (res) => res,
    (error) => {
      if (error?.response?.status === 401) {
        logoutAndNavigate();
      }
      return Promise.reject(error);
    },
  );

  return API.request({
    method,
    url,
    data,
  });
};
