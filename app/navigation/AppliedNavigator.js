import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppliedListingsScreen from "../screens/AppliedListingsScreen";

const Stack = createStackNavigator();

const AppliedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={AppliedListingsScreen} />
  </Stack.Navigator>
);

export default AppliedNavigator;
