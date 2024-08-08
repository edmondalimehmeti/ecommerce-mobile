import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '_scenes/home';
import {colors} from '_theme/';
import BrandIcon from '_assets/icons/brand.svg';
import CarIcon from '_assets/icons/car.svg';
import UserIcon from '_assets/icons/user.svg';
import BriefcaseIcon from '_assets/icons/briefcase.svg';
import ProfileScreen from '_scenes/profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ResultsScreen from '_scenes/home/results';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useMemo} from 'react';
import {Platform} from 'react-native';
import AccountSetupScreen from '_scenes/Shifts/Unverified Profile/AccountSetup';
import AddWorkExperienceScreen from '_scenes/Auth/AddWorkExperience';
import EdItWorkExperienceScreen from '_scenes/Auth/EdItWorkExperience';
import ChooseExperienceTypeScreen from '_scenes/Auth/ChooseExperienceType';
import AddProfilePictureScreen from '_scenes/Shifts/Unverified Profile/AddProfilePicture';
import EnterBirthdateScreen from '_scenes/Shifts/Unverified Profile/EnterBirthdate';
import AddAlcoholCertificateScreen from '_scenes/Shifts/Unverified Profile/AddAlcoholCertificate';
import useReduxSelector from '_utils/hooks/useReduxSelector';
import ShiftsScreen from '_scenes/Shifts/Verified Profile';
import ShiftDetailsScreen from '_scenes/Shifts/Verified Profile/ShiftDetails';
import UploadResumeScreen from '_scenes/Auth/UploadResume';
import EditShiftWorkScreen from '_scenes/Auth/EditShiftWork';
import SelectShiftsScreen from '_scenes/Shifts/Verified Profile/SelectShiftsScreen';
import ApplyToShiftScreen from '_scenes/Shifts/Verified Profile/ApplyToShift';
import AddShiftWork from '_scenes/Auth/AddShiftWork';
import ShiftBookedSuccessfullyScreen from '_scenes/Shifts/Verified Profile/ShiftBookedSuccessfully';
import AccountInformationScreen from '_scenes/profile/AccountInformation';
import EditNameScreen from '_scenes/profile/EditName';
import EditBirthdateScreen from '_scenes/profile/EditBirthdate';
import EditEmailScreen from '_scenes/profile/EditEmail';
import EditLocationScreen from '_scenes/profile/EditLocation';
import SearchAddressScreen from '_scenes/Auth/SearchAddress';
import EditEmergencyContactScreen from '_scenes/profile/EditEmergencyContact';
import NotificationsScreen from '_scenes/profile/Notifications';
import EditScheduleScreen from '_scenes/profile/EditSchedule';
import EditDistanceFromHomeScreen from '_scenes/profile/EditDistanceFromHome';
// Import other screens for your tabs

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeNav = createNativeStackNavigator();
const ShiftsNav = createNativeStackNavigator();
const ProfileNav = createNativeStackNavigator();
const UnverifiedProfileNav = createNativeStackNavigator();
const VerifiedProfileNav = createNativeStackNavigator();

const UnverifiedProfileShiftsStack = () => {
  return (
    <UnverifiedProfileNav.Navigator screenOptions={{headerShown: false}}>
      <UnverifiedProfileNav.Screen
        name="Account Setup"
        component={AccountSetupScreen}
      />
    </UnverifiedProfileNav.Navigator>
  );
};

const VerifiedProfileShiftsStack = () => {
  return (
    <VerifiedProfileNav.Navigator screenOptions={{headerShown: false}}>
      <VerifiedProfileNav.Screen name="Shifts" component={ShiftsScreen} />
      <VerifiedProfileNav.Screen
        name="Shift Details"
        component={ShiftDetailsScreen}
      />
    </VerifiedProfileNav.Navigator>
  );
};

const ShiftsStack = () => {
  const isVerified = useReduxSelector('me.data.is_verified', false);
  return (
    <ShiftsNav.Navigator screenOptions={{headerShown: false}}>
      {isVerified ? (
        <ShiftsNav.Screen
          name="Verified Profile Shift"
          component={VerifiedProfileShiftsStack}
        />
      ) : (
        <ShiftsNav.Screen
          name="Unverified Profile Shift"
          component={UnverifiedProfileShiftsStack}
        />
      )}
    </ShiftsNav.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <ProfileNav.Navigator screenOptions={{headerShown: false}}>
      <ProfileNav.Screen name="Profile" component={ProfileScreen} />
    </ProfileNav.Navigator>
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
        tabBarIcon: ({focused, color, size}) => {
          const focusColor = focused ? colors.primary : colors.grey5;
          switch (route.name) {
            case 'Home':
              return <BrandIcon height={25} width={25} color={focusColor} />;
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
        tabBarStyle: {backgroundColor: colors.white, ...platformStyles},
        headerStyle: {backgroundColor: colors.white},
        headerTintColor: colors.primary,
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.grey5,
      }}>
      {/*<Tab.Screen*/}
      {/*  name="Home"*/}
      {/*  component={HomeStack}*/}
      {/*  options={{tabBarLabel: 'Instawork', headerTitle: 'Instawork'}}*/}
      {/*/>*/}
      {/*<Tab.Screen*/}
      {/*  options={{tabBarLabel: 'Profile', headerTitle: 'Profile'}}*/}
      {/*  name="Profile"*/}
      {/*  component={ProfileScreen}*/}
      {/*/>*/}
      <Tab.Screen name="Shifts" component={ShiftsStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen
        name="Choose Experience Type"
        component={ChooseExperienceTypeScreen}
      />
      <Stack.Screen
        name="Add Work Experience"
        component={AddWorkExperienceScreen}
      />
      <Stack.Screen
        name="Edit Work Experience"
        component={EdItWorkExperienceScreen}
      />
      <Stack.Screen name="Add Shift Work" component={AddShiftWork} />
      <Stack.Screen name="Edit Shift Work" component={EditShiftWorkScreen} />
      <Stack.Screen
        name="Add Profile Picture"
        component={AddProfilePictureScreen}
      />
      <Stack.Screen name="Enter Birthdate" component={EnterBirthdateScreen} />
      <Stack.Screen
        name="Add Alcohol Certificate"
        component={AddAlcoholCertificateScreen}
      />
      <Stack.Screen name="Upload Resume" component={UploadResumeScreen} />
      <Stack.Screen name="Select Shifts" component={SelectShiftsScreen} />
      <Stack.Screen name="Apply To Shift" component={ApplyToShiftScreen} />
      <Stack.Screen
        name="Shift Booked Successfully"
        component={ShiftBookedSuccessfullyScreen}
      />
      <Stack.Screen
        name="Account Information"
        component={AccountInformationScreen}
      />
      <Stack.Screen name="Edit Name" component={EditNameScreen} />
      <Stack.Screen name="Edit Birthdate" component={EditBirthdateScreen} />
      <Stack.Screen name="Edit Email" component={EditEmailScreen} />
      <Stack.Screen name="Edit Location" component={EditLocationScreen} />
      <Stack.Screen name="Search Address" component={SearchAddressScreen} />
      <Stack.Screen
        name="Edit Emergency Contact"
        component={EditEmergencyContactScreen}
      />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Edit Schedule" component={EditScheduleScreen} />
      <Stack.Screen
        name="Edit Distance From Home"
        component={EditDistanceFromHomeScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
