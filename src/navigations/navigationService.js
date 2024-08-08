import {StackActions} from '@react-navigation/native';
import {createNavigationContainerRef} from '@react-navigation/native';

/**
 * The navigation is implemented as a service so that it can be used outside of components, for example in sagas.
 *
 * @see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html
 */

export const navigationRef = createNavigationContainerRef();

const navigate = (name, params) => {
  if (navigationRef.isReady()) {
    navigationRef.current.navigate(name, params);
  }
};

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
const navigateAndReset = (routeName, params) => {
  navigationRef.current &&
    navigationRef.current.dispatch(StackActions.replace(routeName, params));
};

export default {
  navigationRef,
  navigate,
  navigateAndReset,
};
