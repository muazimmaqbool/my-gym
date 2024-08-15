import { View, Text, SafeAreaView, Platform } from "react-native";
import React from "react";
import { styles } from "./StyleHomeScreen";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={styles.container
        
      }
    >
     <View style={styles.topBar}>
      <Text style={styles.gymName}>Hi-Life Fitness</Text>
      <Text style={styles.address}>Bilal Abad Sopore</Text>
     </View>
     <View style={styles.mainView}>

     </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
