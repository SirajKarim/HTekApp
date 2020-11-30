import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from "./navigation/bottomtabnavigator";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
    <BottomTabNavigator />
  </NavigationContainer>
  );
}
