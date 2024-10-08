import { View, Text } from "react-native";
import React from "react";
import {styles} from "./StyleSettings"
import { Button } from "react-native-paper";

//called from HomeScreen and its navigated in HomeStack.jsx
const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
      </View>
      <View style={styles.mainView}>
      <Button
          buttonColor="#3a86ff"
          icon="home"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => navigation.navigate("homeScreen")}
        >
          Return To Home
        </Button>
      </View>
    </View>
  );
};

export default Settings;
