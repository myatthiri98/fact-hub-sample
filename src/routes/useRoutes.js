import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/Authentication/SplashScreen';
import OnboardingScreen from '../screens/Authentication/OnboardingScreen';
import ConfirmOnboardingScreen from '../screens/Authentication/ConfirmOnboardingScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SettingsScreen from '../screens/Home/HomeScreen';
import ExploreScreen from '../screens/Explore/ExploreScreen';
import BookmarkScreen from '../screens/Bookmark/BookmarkScreen';
import HistoryScreen from '../screens/History/HistoryScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding" headerMode="none">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="ConfirmOnboarding" component={ConfirmOnboardingScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Bookmark" component={BookmarkScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode="none">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
