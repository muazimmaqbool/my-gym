import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "../Screens/Home Screen/HomeScreen";
import Settings from "../Screens/Settings/Settings";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Dashboard from "../Screens/Dashboard/Dashboard";
import AllMembers from "../Screens/All Members/AllMembers";
import AddMember from "../Screens/New Admission/AddMember";
import Notifcations from "../Screens/Notifications/Notifications";
import UserProfile from "../Components/User Profile/UserProfile";
import MembersOverview from "../Components/Members Overview/MembersOverview";
import StaffManagement from "../Components/Staff Management/StaffManagement";
import NotificationAlerts from "../Components/Notification and Alerts/NotificationAlerts";
import Inventory from "../Components/Inventory Management/Inventory";
import BillingAndPayments from "../Components/Billing and Payments/BillingAndPayments";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#3a86ff",
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
        name="dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          title: "Dashboard",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="addMember"
        component={AddMember}
        options={{
          headerShown: true,
          title: "Add New Member",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="userProfile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="allMembers"
        component={AllMembers}
        options={{
          headerShown: true,
          title: "All Members",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="notifications"
        component={Notifcations}
        options={{
          headerShown: true,
          title: "Notifications/Alerts",
          headerShadowVisible: false,
        }}
      />

      <Stack.Screen
        name="settings"
        component={Settings}
        options={{
          headerShown: false,
          title: "Settings",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="membersOverview"
        component={MembersOverview}
        options={{
          headerShown: true,
          title: "Members Overview",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="staffManagement"
        component={StaffManagement}
        options={{
          headerShown: true,
          title: "Staff Management",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="notificationAlerts"
        component={NotificationAlerts}
        options={{
          headerShown: true,
          title: "Notifications and Alerts",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="inventory"
        component={Inventory}
        options={{
          headerShown: true,
          title: "Inventory Management",
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="billings"
        component={BillingAndPayments}
        options={{
          headerShown: true,
          title: "Billing and Payments",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
