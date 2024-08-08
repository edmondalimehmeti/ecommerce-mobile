import {createFetchReducer} from '../generic/helper';

// Root
const logout = createFetchReducer('logout', {isFetching: false});
const properties = createFetchReducer('properties', {isFetching: false});
const me = createFetchReducer('me', {isFetching: false});

export default {
  logout,
  properties,
  me,
};
