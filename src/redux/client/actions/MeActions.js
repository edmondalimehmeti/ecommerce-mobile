import {createFetchActionCreator} from '_redux/generic/helper';

const getUser = (onSuccess, onError) =>
  createFetchActionCreator('/user/me', 'me', 'GET', null, onSuccess, onError, {
    transformData: (data) => data.data.user,
  })();

const getProperties = (onSuccess, onError) =>
  createFetchActionCreator(
    'v1/properties',
    'properties',
    'GET',
    null,
    onSuccess,
    onError,
  )();

export default {
  getUser,
  getProperties,
};
