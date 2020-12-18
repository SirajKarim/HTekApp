import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginForm from "../screens/loginscreen";
import RegistrationForm from "../screens/SignUp"
import BottomTabNavigator from "./bottomtabnavigator";

const Stack = createStackNavigator();

const LoginSignUp = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="SignUp" component={RegistrationForm} />
        <Stack.Screen name ="Home" component={BottomTabNavigator} />
        </Stack.Navigator> 
    );
}

export default LoginSignUp;