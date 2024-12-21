import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import {styles} from "./stylesLogin"
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.header}>
        <Ionicons  name="arrow-back-sharp" onPress={()=>{navigation.navigate("Splash")}} size={28} color="white" />
          <Text style={[styles.subTitle,{fontSize:20}]}>Getting Started</Text>
        </View>
        <View style={{gap:5}}>
        <Text style={styles.title}>My Gym Login</Text>
        <Text style={styles.subTitle}>Please enter your username and password.</Text>
        </View>
      </View>
      <View style={styles.mainView}>

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
