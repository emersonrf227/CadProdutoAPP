import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import Search from './src/pages/search'
import Caditem from './src/pages/caditem'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const AppNavigator = createStackNavigator({
  Search: {
    screen: Search,
  },
  Caditem: {
    screen: Caditem,
  },
},
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#03BB85',
    },
    headerTintColor: '#333',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);