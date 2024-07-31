import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
const splashScreenImg=require("../../assets/images/splashScreen.png")

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
      <Button mode="outlined" onPress={() =>{navigation.navigate("front")}}>
        Get Started
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
