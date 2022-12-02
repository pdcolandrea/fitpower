import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignupScreen from './features/Signup';
import DashboardScreen from './features/Dashboard';
import {defaultStackOptions} from './theme/navTheme';
import WelcomeScreen from './features/Welcome';
import WelcomeModal from './features/Signup/components/WelcomeModal';
import {FitTheme} from './theme/theme';
import {View} from 'react-native';

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
      />
    </DashboardStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator();
const AppStack = createBottomTabNavigator();

interface NavRootProps {
  isAuth: boolean;
}
const NavigationRoot = (props: NavRootProps) => {
  const {isAuth} = props;

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
    </AppStack.Navigator>
  );
};

export default NavigationRoot;
