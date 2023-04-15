import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#FFD8CC",
          borderBottomWidth: 1,
          borderBottomColor: "#99154E",
        },
        headerTitleAlign: "center",
        headerTitle: ({ style }) => <MaterialCommunityIcons name="soccer" size={24} color="black" style={style} />,
        headerBackTitleVisible: true,
        headerBackTitle: "Prev",
        headerTitleStyle: { fontsize: 24 },
        headerTintColor: "#e74c3c",
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator
      initialRouteName="Settins"
      screenOptions={{
        cardStyle: { backgroundColor: "#ffffff" },
        headerStyle: {
          height: 110,
          backgroundColor: "#FFD8CC",
          borderBottomWidth: 1,
          borderBottomColor: "#99154E",
        },
        headerTitleAlign: "center",
        headerTitle: ({ style }) => <MaterialCommunityIcons name="soccer" size={24} color="black" style={style} />,
        headerBackTitleVisible: true,
        headerBackTitle: "Prev",
        headerTitleStyle: { fontsize: 24 },
        headerTintColor: "#e74c3c",
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="축구퀴즈" component={HomeStackScreen} options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }} />
        <Tab.Screen
          name="넌센스퀴즈"
          component={SettingsStackScreen}
          options={{ tabBarIcon: () => <Ionicons name="settings" size={20} /> }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
