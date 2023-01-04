import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignupScreen from './features/Signup';
import DashboardScreen from './features/Dashboard';
import {defaultStackOptions} from './theme/navTheme';
import WelcomeScreen from './features/Welcome';
import WelcomeModal from './features/Signup/components/WelcomeModal';
import {FitTheme} from './theme/theme';
import {View} from 'react-native';
import VerifyModal from './features/Signup/components/VerifyModal';
import {FitnessContext} from './util/context';

const SignupStack = createNativeStackNavigator();
const SignupNav = () => {
  return (
    <SignupStack.Navigator initialRouteName="WelcomeScreen">
      <SignupStack.Group screenOptions={defaultStackOptions}>
        <SignupStack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <SignupStack.Screen name="SignupScreen" component={SignupScreen} />
      </SignupStack.Group>

      <SignupStack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <SignupStack.Screen name="SignupModal" component={WelcomeModal} />
        <SignupStack.Screen name="VerifyModal" component={VerifyModal} />
      </SignupStack.Group>
    </SignupStack.Navigator>
  );
};

const DashboardStack = createNativeStackNavigator();
const DashboardNav = () => {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
    </DashboardStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
const AppStack = createBottomTabNavigator();

const NavigationRoot = () => {
  const {isAuth} = useContext(FitnessContext);

  if (!isAuth) {
    return (
      <RootStack.Navigator
        initialRouteName="SignupNav"
        screenOptions={defaultStackOptions}>
        <RootStack.Screen name="SignupNav" component={SignupNav} />
      </RootStack.Navigator>
    );
  }

  return (
    <AppStack.Navigator
      initialRouteName="DashboardNav"
      screenOptions={{headerShown: false}}>
      <AppStack.Screen name="DashboardNav" component={DashboardNav} />
      <AppStack.Screen name="Workout" component={DashboardNav} />
      <AppStack.Screen name="Leaderboard" component={DashboardNav} />
      <AppStack.Screen name="Profile" component={DashboardNav} />
    </AppStack.Navigator>
  );
};

export default NavigationRoot;
