import { View, Text, SafeAreaView, Platform, Pressable } from "react-native";
import React from "react";
import { styles } from "./StyleHomeScreen";
import AntDesign from '@expo/vector-icons/AntDesign';

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
        <Pressable>
          <Text>New Admission</Text>
        </Pressable>
     </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
