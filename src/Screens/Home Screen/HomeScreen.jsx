import {
  View,
  Text,
  SafeAreaView,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { styles } from "./StyleHomeScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";
import homeBg from "../../../assets/images/homeBG2.jpg";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={homeBg}
        resizeMode="cover"
        style={styles.bgImage}
      >
        <View style={styles.topBar}>
          <Text style={styles.gymName}>Hi-Life Fitness</Text>
          <Text style={styles.address}>Bilal Abad Sopore</Text>
        </View>

        <View style={styles.mainView}>
          <Pressable style={styles.fieldContainer}
          onPress={() => navigation.navigate("dashboard")}>
            <MaterialIcons name="dashboard" size={24} color="#48BD69" />
            <Text style={styles.fieldText}>Dashboard Overview</Text>
          </Pressable>

          <Pressable style={styles.fieldContainer}
          onPress={() => navigation.navigate("addMember")}>
            <Ionicons name="person-add-sharp" size={24} color="#257CFF" />
            <Text style={styles.fieldText}>New Admission</Text>
          </Pressable>

          <Pressable style={styles.fieldContainer}
          onPress={() => navigation.navigate("allMembers")}>
            <Ionicons name="people" size={24} color="#48BD69" />
            <Text style={styles.fieldText}>All Memebers</Text>
          </Pressable>

          <Pressable style={styles.fieldContainer}
          onPress={() => navigation.navigate("notifications")}>
            <MaterialCommunityIcons
              name="bell-alert"
              size={24}
              color="purple"
            />
            <Text style={styles.fieldText}>Notifications/Alerts</Text>
          </Pressable>

          <Pressable
            style={styles.fieldContainer}
            onPress={() => navigation.navigate("settings")}
          >
            <Ionicons name="settings" size={24} color="#172B85" />
            <Text style={styles.fieldText}>Settings</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
