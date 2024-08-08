import {combineReducers} from 'redux';
import ApiReducers from '_redux/client/reducers';
import AppReducers from '_redux/app/reducers';
import {AUTH_LOGOUT} from './app/types';
const appReducer = combineReducers({
  ...ApiReducers,
  ...AppReducers,
});

const rootReducer = (state, action) => {
  if (action.type === AUTH_LOGOUT) {
    state = {};
  }
  return appReducer(state, action);
};
export default rootReducer;
