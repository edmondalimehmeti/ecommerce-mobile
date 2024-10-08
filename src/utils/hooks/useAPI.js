import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import apicall from '_utils/apicall';
import {store} from '_redux/stores';

const useAPI = () => {
  const dispatch = useDispatch();

  const makeRequest = useCallback(
    async (method, url, body = null, additionalHeaders) => {
      try {
        const response = await apicall(
          method,
          url,
          body,
          store.getState,
          dispatch,
          additionalHeaders,
        );

        console.log(`SUCCESS ${url} response:`, response);
        return response.data;
      } catch (error) {
        console.log(`ERROR ${url}:`, error);
        return Promise.reject(error);
      }
    },
    [dispatch],
  );

  return {makeRequest};
};

export default useAPI;
