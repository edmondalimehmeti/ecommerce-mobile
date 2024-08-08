import configureStore from './createStore';
import rootReducer from '_redux/reducer';

const rootSaga = {}; // Your rootSaga definition here

const {store, persistor} = configureStore(rootReducer, rootSaga);

export {store, persistor};
