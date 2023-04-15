import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import Screen3 from "../screens/Screen3";

const Stack = createNativeStackNavigator();

export default function NestedStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1}></Stack.Screen>
      <Stack.Screen name="Screen3" component={Screen3}></Stack.Screen>
    </Stack.Navigator>
  );
}
