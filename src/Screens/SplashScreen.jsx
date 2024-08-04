import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
const splashScreenImg=require("../../assets/images/splashScreen2.png")

export default function SplashScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} alt="mainImage" source={splashScreenImg} />
      <Text style={styles.tagline}>
        Welcome to your personal gym management
      </Text>
      <Button mode="contained" icon={"application-export"} onPress={() =>{navigation.navigate("front")}}>
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
    gap:30,
    padding:10,
  },
  image:{
    width:"100%",
    height:"50%",
  },
  tagline: {
    //margin: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#4F4F4F",
    fontSize: 30,
  },
});
