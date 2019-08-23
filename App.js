import React from 'react';
// import { Navigation } from 'react-native-navigation';
// import Login  from './src/components/authentication/Login';
import TabNavigator from './src/navigation/TabNavigator';
import MainStack from './src/navigation/Header';
import {View } from 'react-native';
import styles from './src/components/styles';
import { Ionicons } from '@expo/vector-icons';
import { createStacknavigator}  from 'react-navigation';
import Login from './src/components/authentication/Login';
import Vendor from './src/components/VendorProfile/Vendor';

// Registering screens
// Navigation.registerComponent(locals.Login, ()=>Login); //takes 2 arguments. unique identifier of the screen and a function to return the screen


//Start an App
// Navigation.startSingleScreenApp

export default class App extends React.Component {
  render() {
    return (
    
      <TabNavigator></TabNavigator>
      
    );
  }
}
