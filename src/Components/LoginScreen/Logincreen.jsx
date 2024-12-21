import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import { styles } from "./stylesLogin";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const renderField = (label) => {
    return (
      <TextInput
        //value={searchText}
        //onChangeText={handleSearchText}
        mode="outlined"
        label={label}
        outlineColor="#3a86ff"
        activeOutlineColor="#3a86ff"
        style={styles.textInput}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-sharp"
            onPress={() => {
              navigation.navigate("Splash");
            }}
            size={28}
            color="white"
          />
          <Text style={[styles.subTitle, { fontSize: 20 }]}>
            Getting Started
          </Text>
        </View>
        <View style={{ gap: 5 }}>
          <Text style={styles.title}>My Gym Login</Text>
          <Text style={styles.subTitle}>
            Please enter your username and password.
          </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <View style={styles.login}>
          {renderField("Please Enter Your Email")}
          {renderField("Please Enter Your Password")}
          <Button
            buttonColor="#3a86ff"
            
            mode="contained"
            onPress={() => navigation.navigate("homeStack")}
          >
            Login
          </Button>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
