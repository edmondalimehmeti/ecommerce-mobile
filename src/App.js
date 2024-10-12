import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import RootScreen from '_scenes/root';
import RNBootSplash from 'react-native-bootsplash';
import SplashScreen from '_scenes/splash';
import {store, persistor} from '_redux/stores';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import QueryStringProvider from '_utils/providers/QueryStringProvider';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <SafeAreaProvider>
          <QueryStringProvider>
            <RootScreen />
          </QueryStringProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
