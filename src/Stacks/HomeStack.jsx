import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../Screens/Home Screen/HomeScreen";
import Settings from "../Screens/Settings/Settings"
import { MaterialCommunityIcons,Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const HomeStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "purple",
        tabBarInactiveTintColor:"gray"
      }}
    >
      <Tab.Screen
        name="homeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
           tabBarIcon:({color})=><MaterialCommunityIcons name="home-variant-outline" size={26} color={color} />
        }}
        //initialParams={{user}}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          headerShown: false,
           tabBarIcon:({color})=><Feather name="settings" size={24} color={color} />
        }}
        //initialParams={{user}}
      />
      {/* <Tab.Screen
        name="appointmentstack"
        component={AppointmentStack}
        options={{
          headerShown: false,
          tabBarButton:()=>null,
        }}
      /> */}
      {/* <Tab.Screen
       name="remindersStack"
       component={RemindersStack}
       options={{
         headerShown: false,
         tabBarButton:()=>null,
          headerLeft: () => (
            <Button
             onPress={() => navigation.navigate("home")}  
              style={{backgroundColor:"#2563EB"}}
            >
              <Ionicons name="arrow-back" size={24} color="white" /> 
            </Button>
          ),
       }}
      /> */}
      {/* <Tab.Screen
        name="medicalChart"
        component={MedicalChart}
        options={{
          headerShown: true,
          tabBarButton:()=>null,
          title: "Medical Chart",
          headerLeft: () => (
            <Button
             onPress={() => navigation.navigate("home")}  
              style={{backgroundColor:"#2563EB"}}
            >
              <Ionicons name="arrow-back" size={24} color="white" /> 
            </Button>
          ),
          headerStyle: {
            backgroundColor: "#2563EB",
          },
          headerShadowVisible: false,
          headerTintColor: "#FFFFFF", //#1D1E25
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#FFFFFF",
          },
          headerTitleAlign: "center",
        }}
        
      /> */}
       {/* <Tab.Screen
        name="settingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarIcon:({color})=><Feather name="settings" size={26} color={color} />
        }}
        initialParams={{userId}}
      /> */}
    </Tab.Navigator>
  )
}

export default HomeStack