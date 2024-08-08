/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
// import App from './src/workplace';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
  'EventEmitter',
  'NativeEventEmitter',
  'asmCrypto',
  'formSheet',
  'Require cycle',
  'React.createFactory() is deprecated',
  'If you want to use Reanimated 2 then go through our installation',
  'Remote debugger is in a background tab',
  'componentWillReceiveProps has been renamed',
  'componentWillMount has been renamed',
  'ViewPropTypes will be removed',
  'source.uri should not be an empty string',
]);

if (!__DEV__) {
  console.log = () => {};
}

AppRegistry.registerComponent(appName, () => App);
