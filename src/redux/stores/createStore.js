import {applyMiddleware, compose, createStore} from 'redux';
// import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
// import createSensitiveStorage from 'redux-persist-sensitive-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const sensitiveStorage = createSensitiveStorage({});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  /**
   * Blacklist state that we do not need/want to persist
   */
  whitelist: ['me', 'authentication', 'properties'],
};

export default (rootReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  // const rootReducer = combineReducers({
  //   ...rootReducerConfig,
  //   //auth: persistReducer(securePersistConfig, AuthReducer),
  // });

  // Connect the sagas to the redux store
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  // const sagaMiddleware = createSagaMiddleware();
  //middleware.push(sagaMiddleware);
  // Uncomment this if you wont to log redux state changes
  middleware.push(logger);
  middleware.push(thunk);
  enhancers.push(applyMiddleware(...middleware));

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, composeEnhancers(...enhancers));
  const persistor = persistStore(store);

  // Kick off the root saga
  //sagaMiddleware.run(rootSaga);

  return {store, persistor};
};
