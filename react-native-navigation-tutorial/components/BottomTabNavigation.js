import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import NestedStackNavigation from "./NestedStackNavigator";
import Tab1 from "../screens/Tab1";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "rgb(9, 163, 52)",
        },

        tabBarActiveBackgroundColor: "rgb(90, 90, 255);",
      }}
      initialRouteName="Tab1"
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={24} color="white" />,
          tabBarLabelStyle: { color: "white", marginBottom: 5 },
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={NestedStackNavigation}
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={24} color="white" />,
          tabBarLabelStyle: { color: "white", marginBottom: 5 },
        }}
      />
    </Tab.Navigator>
  );
}
