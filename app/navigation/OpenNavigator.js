import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OpenListingsScreen from "../screens/OpenListingsScreen";

const Stack = createStackNavigator();

const OpenNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={OpenListingsScreen} />
  </Stack.Navigator>
);

export default OpenNavigator;
