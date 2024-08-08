import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '_scenes/Auth/Landing';
import LoginScreen from '_scenes/Auth/Login';
import VerificationCodeScreen from '_scenes/Auth/VerificationCode';
import CreateAccount from '_scenes/Auth/CreateAccount';
import FindShiftsNearbyScreen from '_scenes/Auth/FindShiftsNearby';
import SearchAddressScreen from '_scenes/Auth/SearchAddress';
import WorkInterestsScreen from '_scenes/Auth/WorkInterests';
import AddProfilePictureScreen from '_scenes/Auth/AddProfilePicture';
import ChooseExperienceTypeScreen from '_scenes/Auth/ChooseExperienceType';
import AddWorkExperienceScreen from '_scenes/Auth/AddWorkExperience';
import UploadResumeScreen from '_scenes/Auth/UploadResume';
import VerifyProfileInformationScreen from '_scenes/Auth/VerifyProfileInformation';
import OnboardingQuestionnaireScreen from '_scenes/Auth/OnboardingQuestionnaire';
import FindPeopleYouMayKnowScreen from '_scenes/Auth/FindPeopleYouMayKnow';
import SetUpPasswordScreen from '_scenes/Auth/SetUpPassword';
import LoginVerificationCodeScreen from '_scenes/Auth/LoginVerificationCode';
import AddShiftWorkScreen from '_scenes/Auth/AddShiftWork';
import AddEducationScreen from '_scenes/Auth/AddEducation';
import EditSummaryScreen from '_scenes/Auth/EditSummary';
import EditSkillsScreen from '_scenes/Auth/EditSkills';
import EdItWorkExperienceScreen from '_scenes/Auth/EdItWorkExperience';
import EditEducationScreen from '_scenes/Auth/EditEducation';
import AddCertificationScreen from '_scenes/Auth/AddCertification';
import AddFriendsScreen from '_scenes/Auth/AddFriends';
import CreateProfileScreen from '_scenes/Auth/CreateProfile';
import EditShiftWorkScreen from '_scenes/Auth/EditShiftWork';
import EditCertificationScreen from '_scenes/Auth/EditCertification';

const AuthStack = createNativeStackNavigator();

const AuthenticationStack = () => (
  <AuthStack.Navigator headerMode="none" screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Landing" component={LandingScreen} />
    <AuthStack.Screen name="Create Account" component={CreateAccount} />
    <AuthStack.Screen name="Set Up Password" component={SetUpPasswordScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen
      name="Login Verification Code"
      component={LoginVerificationCodeScreen}
    />
    <AuthStack.Screen name="Edit Summary" component={EditSummaryScreen} />
    <AuthStack.Screen
      name="Verification Code"
      component={VerificationCodeScreen}
    />
    <AuthStack.Screen
      name="Onboarding Questionnaire"
      component={OnboardingQuestionnaireScreen}
    />
    <AuthStack.Screen
      name="Find Shifts Nearby"
      component={FindShiftsNearbyScreen}
    />
    <AuthStack.Screen name="Search Address" component={SearchAddressScreen} />
    <AuthStack.Screen name="Work Interests" component={WorkInterestsScreen} />
    <AuthStack.Screen
      name="Add Profile Picture"
      component={AddProfilePictureScreen}
    />
    <AuthStack.Screen
      name="Find People You May Know"
      component={FindPeopleYouMayKnowScreen}
    />
    <AuthStack.Screen name="Add Friends" component={AddFriendsScreen} />
    <AuthStack.Screen name="Create Profile" component={CreateProfileScreen} />
    <AuthStack.Screen
      name="Choose Experience Type"
      component={ChooseExperienceTypeScreen}
    />
    <AuthStack.Screen name="Add Shift Work" component={AddShiftWorkScreen} />
    <AuthStack.Screen
      name="Add Work Experience"
      component={AddWorkExperienceScreen}
    />
    <AuthStack.Screen name="Add Education" component={AddEducationScreen} />
    <AuthStack.Screen name="Upload Resume" component={UploadResumeScreen} />
    <AuthStack.Screen
      name="Verify Profile Information"
      component={VerifyProfileInformationScreen}
    />
    <AuthStack.Screen name="Edit Skills" component={EditSkillsScreen} />
    <AuthStack.Screen
      name="Edit Work Experience"
      component={EdItWorkExperienceScreen}
    />
    <AuthStack.Screen name="Edit Education" component={EditEducationScreen} />
    <AuthStack.Screen
      name="Add Certification"
      component={AddCertificationScreen}
    />
    <AuthStack.Screen
      name="Edit Certification"
      component={EditCertificationScreen}
    />
    <AuthStack.Screen name="Edit Shift Work" component={EditShiftWorkScreen} />
  </AuthStack.Navigator>
);

export default AuthenticationStack;
