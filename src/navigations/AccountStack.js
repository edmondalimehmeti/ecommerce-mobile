import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '_theme/';
import HomeIcon from '_assets/icons/home.svg';
import CarIcon from '_assets/icons/car.svg';
import UserIcon from '_assets/icons/user.svg';
import BriefcaseIcon from '_assets/icons/briefcase.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMemo} from 'react';
import {Dimensions, Platform, SafeAreaView, View} from 'react-native';
import HomeScreen from '_scenes/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CText} from '_components/index';
import Drawer from '_components/Drawer';
// Import other screens for your tabs

const Tab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();
const HomeNav = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <HomeNav.Navigator screenOptions={{headerShown: false}}>
      <HomeNav.Screen name="Home" component={HomeScreen} />
    </HomeNav.Navigator>
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
            case 'PaidParking':
              return <CarIcon height={25} width={21} color={focusColor} />;
            case 'Profile':
              return <UserIcon height={20} width={20} color={focusColor} />;
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
    </Tab.Navigator>
  );
};
const {width} = Dimensions.get('window');

const AccountStack = () => {
  return (
    <DrawerNav.Navigator
      headerMode="none"
      screenOptions={{headerShown: false, drawerStyle: {width}}}
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
