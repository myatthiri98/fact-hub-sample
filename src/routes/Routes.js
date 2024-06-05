// routes.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import ReadingHistoryScreen from './screens/ReadingHistoryScreen';
import AllCategoriesListScreen from './screens/AllCategoriesListScreen';
import ArticlePageScreen from './screens/ArticlePageScreen';
import AuthorProfileScreen from './screens/AuthorProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AllCategoriesList" component={AllCategoriesListScreen} />
      <Stack.Screen name="ArticlePage" component={ArticlePageScreen} />
      <Stack.Screen name="AuthorProfile" component={AuthorProfileScreen} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="ArticlePage" component={ArticlePageScreen} />
      <Stack.Screen name="AuthorProfile" component={AuthorProfileScreen} />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="ArticlePage" component={ArticlePageScreen} />
      <Stack.Screen name="AuthorProfile" component={AuthorProfileScreen} />
    </Stack.Navigator>
  );
}

function ReadingHistoryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ReadingHistory" component={ReadingHistoryScreen} />
      <Stack.Screen name="ArticlePage" component={ArticlePageScreen} />
      <Stack.Screen name="AuthorProfile" component={AuthorProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchStack} />
        <Tab.Screen name="Favorite" component={FavoriteStack} />
        <Tab.Screen name="ReadingHistory" component={ReadingHistoryStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
