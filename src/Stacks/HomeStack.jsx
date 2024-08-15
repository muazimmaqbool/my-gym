import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../Screens/Home Screen/HomeScreen";
import Settings from "../Screens/Settings/Settings";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#2563EB",
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "400",
          color: "white",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          // title: "Go Back",
          // headerShadowVisible: false,
          
        }}
        //initialParams={{user}}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        //initialParams={{user}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
