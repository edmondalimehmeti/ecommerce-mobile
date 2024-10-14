import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '_theme/';
import HomeIcon from '_assets/icons/home.svg';
import BriefcaseIcon from '_assets/icons/briefcase.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMemo} from 'react';
import {
  Dimensions,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import HomeScreen from '_scenes/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HeartIcon from '_assets/icons/heart.svg';
import CartIcon from '_assets/icons/cart.svg';
import Drawer from '_components/Drawer';
import ProfileIcon from '_assets/icons/avatar.svg';
import StoreIcon from '_assets/icons/store.svg';
import {CText} from '_components/index';
import Search from '_scenes/Home/search';
import ProductScreen from '_scenes/Home/product';
import CartScreen from '_scenes/cart';
import ProfileScreen from '_scenes/profile';
import FavoritesScreen from '_scenes/Favorites';
// Import other screens for your tabs

const Tab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();
const HomeNav = createNativeStackNavigator();
const CartNav = createNativeStackNavigator();

const SellButton = (props) => {
  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={{
          bottom: 30,
          backgroundColor: colors.green,
          alignItems: 'center',
          justifyContent: 'center',
          width: 80,
          height: 80,
          borderRadius: 40,
        }}>
        <StoreIcon />
        <CText txt="Sell" style={{marginTop: 5, fontWeight: '300'}} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const HomeStack = () => {
  return (
    <HomeNav.Navigator screenOptions={{headerShown: false}}>
      <HomeNav.Screen name="Home" component={HomeScreen} />
      <HomeNav.Screen name="Search" component={Search} />
      <HomeNav.Screen name="Product" component={ProductScreen} />
    </HomeNav.Navigator>
  );
};

const CartStack = () => {
  return (
    <CartNav.Navigator screenOptions={{headerShown: false}}>
      <CartNav.Screen name="My Cart" component={CartScreen} />
    </CartNav.Navigator>
  );
};

const TabNavigator = () => {
  const {bottom} = useSafeAreaInsets();

  const platformStyles = useMemo(() => {
    return Platform.select({
      ios: {},
      android: {
        height: bottom + 65,
        paddingBottom: 14,
      },
    });
  }, [bottom]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          const focusColor = focused ? colors.white : colors.white;
          switch (route.name) {
            case 'Home':
              return <HomeIcon height={25} width={25} color={focusColor} />;
            case 'Favorites':
              return <HeartIcon height={25} width={25} color={focusColor} />;
            case 'Cart':
              return <CartIcon height={25} width={25} color={focusColor} />;
            case 'Profile':
              return <ProfileIcon color={focusColor} />;
            default:
              return (
                <BriefcaseIcon width={20} height={20} color={focusColor} />
              );
          }
        },
        tabBarStyle: {backgroundColor: colors.black, ...platformStyles},
        headerStyle: {backgroundColor: colors.white},
        headerTintColor: colors.primary,
      })}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.white,
      }}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen
        name="Sell"
        component={() => <View />}
        options={{tabBarButton: SellButton}}
      />
      <Tab.Screen name="Cart" component={CartStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
const {width} = Dimensions.get('window');

const AccountStack = () => {
  return (
    <DrawerNav.Navigator
      headerMode="none"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
        drawerStyle: {width},
      }}
      drawerContent={Drawer}>
      <DrawerNav.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </DrawerNav.Navigator>
  );
};

export default AccountStack;
