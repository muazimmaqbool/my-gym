import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
const splashScreenImg = require("../../assets/images/splashScreen2.png");

export default function SplashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} alt="mainImage" source={splashScreenImg} />
      <View>
        <Text style={styles.tagline}>Streamline Your Gym's Success</Text>
        <Text style={[styles.tagline,styles.text]}>Manage & Grow</Text>
      </View>
      <Button
      buttonColor="#3a86ff"
        contentStyle={{ flexDirection: "row-reverse" }}
        mode="contained"
        icon={"location-enter"}
        onPress={() => {
          navigation.navigate("front");
        }}
      >
        Get Started
      </Button>
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("homeStack");
        }}
      >
        Home
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
    padding: 10,
    backgroundColor:"white",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  tagline: {
    fontWeight: "700",
    textAlign: "center",
    color: "#4F4F4F",
    fontSize: 30,
  },
  text:{
    color:"#670066"
  }
});
