import {snakeCase} from 'lodash';
import apicall from '_utils/apicall';
import _ from 'lodash';
import I18n from '_i18n/';
import deviceInfoModule from 'react-native-device-info';
import {appData, showBottomSheet} from '_redux/app/actions';
import moment from 'moment';
const versionToNumber = (version) => {
  return version ? Number(version.split('.').join('')) : 0;
};
const version = versionToNumber(deviceInfoModule.getVersion());

export const createFetchReducer = (identifier, defaultData) => {
  const ACTION_TYPE = identifier.toUpperCase();
  return (state = {isFetching: false}, {type, data}) => {
    switch (type) {
      case `${ACTION_TYPE}/REQUESTED`:
        return {
          ...state,
          isFetching: new Date(),
        };
      case `${ACTION_TYPE}/SUCCEED`:
        return {
          ...(data || {data: defaultData}),
          isFetching: false,
        };
      case `${ACTION_TYPE}/FAILED`:
        return {
          ...state,
          isFetching: false,
        };
      case `${ACTION_TYPE}/RESET`:
        return {
          isFetching: false,
        };
      case `${ACTION_TYPE}/UPDATE`: {
        const initArray = state.data.Content.slice();

        const {groupId, body} = data;

        const objIndex = initArray.findIndex((obj) => obj.GroupId === groupId);

        initArray[objIndex] = {...initArray[objIndex], ...body};

        return {
          ...state,
          data: {
            ...state.data,
            Content: initArray,
          },
          isFetching: false,
        };
      }
      default:
        return state;
    }
  };
};

export const FETCH_CACHE_DURATION = 60 * 1000;

export const createFetchActionCreator =
  (
    urlStrOrFunc,
    identifier,
    method = 'GET',
    body = null,
    onSuccess = () => {},
    onError = (error) => {},
    {force = true, transformData} = {},
    additionalHeaders = {},
  ) =>
  ({cacheDuration = FETCH_CACHE_DURATION} = {}) =>
  async (dispatch, getState) => {
    const state = getState();

    const url =
      typeof urlStrOrFunc === 'function' ? urlStrOrFunc(state) : urlStrOrFunc;

    const currentState = state[identifier];
    if (
      currentState &&
      currentState.isFetching &&
      new Date() - currentState.isFetching < cacheDuration
    ) {
      return null;
    }

    if (
      !force &&
      currentState &&
      new Date() - currentState.fetchedAt < cacheDuration
    ) {
      return currentState.data;
    }

    const ACTION_TYPE = snakeCase(identifier).toUpperCase();

    console.log('Fetching %s: %s', identifier, url);
    dispatch({type: `${ACTION_TYPE}/REQUESTED`});

    try {
      const response = await apicall(
        method,
        url,
        body,
        getState,
        dispatch,
        additionalHeaders,
      );
      const data = response.data;
      console.log('Fetched %s: %o', identifier, data);

      const reqVersion = versionToNumber(
        response?.headers['mbl-app-required-version'],
      );

      if (version < reqVersion) {
        dispatch(showBottomSheet('VersionCheckModal'));
      }

      const isCardUnavailableCurrent = _.get(
        state,
        'appDataState.isCardUnavailable',
        false,
      );
      const isCardUnavailableResponse = !!Number(
        response?.headers['mbl-card-processing-unavailable'],
      );

      if (
        isCardUnavailableResponse &&
        isCardUnavailableCurrent !== isCardUnavailableResponse
      ) {
        dispatch(appData({isCardUnavailable: true}));
      }

      dispatch({
        type: `${ACTION_TYPE}/SUCCEED`,
        data: {
          isFetching: false,
          fetchedAt: moment().format('YYYY-MM-DD HH:mm:ss'),
          data: transformData ? transformData(data, state) : data,
        },
      });
      onSuccess && onSuccess(data);
      return data;
    } catch (err) {
      dispatch({
        type: `${ACTION_TYPE}/FAILED`,
        data: {error: err.response},
      });

      onError &&
        onError(
          err,
          _.get(err, 'response.data.message', I18n.no_internet_connection),
        );

      console.log(
        'Fetch failed %s: %s',
        identifier,
        url,
        err.response ? err.response : err,
      );
    }
    return null;
  };

export const createResetActionCreator = (identifier) => async (dispatch) => {
  const ACTION_TYPE = snakeCase(identifier).toUpperCase();

  dispatch({type: `${ACTION_TYPE}/RESET`});

  return null;
};
