import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AcceptedListingsScreen from "../screens/AcceptedListingsScreen";

const Stack = createStackNavigator();

const AcceptedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={AcceptedListingsScreen} />
  </Stack.Navigator>
);

export default AcceptedNavigator;
