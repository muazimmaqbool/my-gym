import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FrontScreen from "./Components/FrontScreen"
import SplashScreen from "./Screens/SplashScreen"
import HomeStack from "../src/Stacks/HomeStack"

//making  native stack navigator instance
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor("#3a86ff");
    StatusBar.setBarStyle("light-content");
  }, []);
  return (
   <NavigationContainer independent={true}>
    {/* <StatusBar
        backgroundColor={"#3a86ff"}//only works on Android //#2563EB
        barStyle={"light-content"} // try: defult, dark-content also
        /*Note: default is white in android and black in ios
                dark-content: dark color in both
                ligh-content: white color in both
      /> */}
    <RootStack/>
   </NavigationContainer>
  )
}
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
       name="Splash"
       component={SplashScreen}
       options={{
         headerShown: false,
       }}
      />
      <Stack.Screen 
       name="front"
       component={FrontScreen}
       options={{
         headerShown: false,
       }}
      />
      <Stack.Screen 
       name="homeStack"
       component={HomeStack}
       options={{
         headerShown: false,
       }}
      />
    </Stack.Navigator>
  );
};

export default App

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})