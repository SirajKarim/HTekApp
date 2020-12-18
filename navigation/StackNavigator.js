import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Products from "../screens/Products";
import Tools from "../screens/Tools";
import Config from "../screens/Config";
import Cart from "../screens/Cart";
import Rooms from "../screens/Room";
// import MotorControls from "../screens/MotorControlling";
import MotorControllingScreen from "../screens/MotorControllingScreen";
import ControlScreen from "../screens/controlscreen";
import MyPedometer from "../screens/Pedometer";
import LoginForm from "../screens/loginscreen";   


const Stack = createStackNavigator();


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#242945",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      {/* <Stack.Screen name="Login" component={LoginForm}/> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Rooms" component={Rooms}>
        {/* <Stack.Screen name = "ControlScreen" component = {ControlScreen} /> */}
      </Stack.Screen>
      <Stack.Screen name="MotorControl" component={MotorControllingScreen} />
      <Stack.Screen name="ControlScreen" component={ControlScreen} />
     

    </Stack.Navigator>
  );
}
const ProductsStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          backgroundColor: "#242945",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Products" component={Products} />
    </Stack.Navigator>
  );
}

const ToolsStackNavigator = () => {
    return (
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: "#242945",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
      >
        <Stack.Screen name="Tools" component={Tools} />
        <Stack.Screen name="Pedometer" component={MyPedometer} />
      </Stack.Navigator>
    );
  }

  const ConfigStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#242945",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="Config" component={Config} />
      </Stack.Navigator>
    );
  }
  const CartStackNavigator = () => {
    return (
      <Stack.Navigator
      screenOptions={{
          headerStyle: {
            backgroundColor: "#242945",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    );
  }
  
  export { HomeStackNavigator, ProductsStackNavigator, ToolsStackNavigator,ConfigStackNavigator, CartStackNavigator };