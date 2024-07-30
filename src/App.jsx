import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FrontScreen from "../Components/FrontScreen"

//making  native stack navigator instance
const Stack = createNativeStackNavigator();

import { Button } from 'react-native-paper'
const App = () => {
  return (
   <NavigationContainer independent={true}>
    <RootStack/>
   </NavigationContainer>
  )
}
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
       name="Splash"
       component={FrontScreen}
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