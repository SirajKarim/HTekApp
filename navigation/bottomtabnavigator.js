import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ConfigStackNavigator, HomeStackNavigator, ProductsStackNavigator,ToolsStackNavigator, CartStackNavigator } from "./StackNavigator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import RegistrationForm from '../screens/SignUp';


const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    tabBarOptions = {{activeBackgroundColor: '#242945', inactiveBackgroundColor: '#242945' , activeTintColor: 'white'}}
    >
      <Tab.Screen name="Home"
       component={HomeStackNavigator}
       options = {{tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
      )}}
      />

      <Tab.Screen name="Products" 
      component={ProductsStackNavigator} 
      options={{
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="shopping-bag" color={color} size={26}   />
      ),
    }}  />
      <Tab.Screen name="Tools" 
      component={ToolsStackNavigator}  
      options={{
      tabBarLabel: 'Tools',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="tools" color={color} size={26}  />
      ),
    }}  />
      <Tab.Screen name="Config" 
      component={ConfigStackNavigator}  
      options={{
      tabBarLabel: 'Config',
      tabBarIcon: ({ color }) => (
        <MaterialIcons name="settings" size={28} color={color} />
      ),
    }}  />
      <Tab.Screen name="Cart" 
      component={CartStackNavigator}  
      options={{
      tabBarLabel: 'Cart',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="shopping-cart" size={24} color={color} />
      ),
    }}  />
     {/* <Tab.Screen name="SignUp" 
      component={RegistrationForm}  
      options={{
      tabBarLabel: 'Sign Up',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="signup" size={24} color={color} />
      ),
    }}  /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;