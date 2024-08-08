import {useSelector} from 'react-redux';
import _ from 'lodash';

export const useReduxSelector = (path, defaultValue) => {
  return useSelector((state) => _.get(state, path, defaultValue), {
    equalityFn: (a, b) => {
      return _.isEqual(a, b);
    },
  });
};

export default useReduxSelector;
