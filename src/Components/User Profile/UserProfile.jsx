import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./StyleUserProfile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from '@expo/vector-icons/Feather';

const UserProfile = ({ navigation, route }) => {
  const { user } = route.params;
  //console.log("user recived:",user)
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("allMembers")}
        style={styles.arrowBack}
      >
        <Ionicons name="arrow-back" size={30} color="white" />
        <Feather name="edit" size={25} color="white" />
      </Pressable>
      <View style={styles.topBar}>
        {user && (
          <>
            <Text style={styles.gymName}>{user.first_name} {user.last_name}</Text>
            <Text style={styles.address}>{user.address}</Text>
          </>
        )}
      </View>
      <View style={styles.mainView}></View>
    </SafeAreaView>
  );
};

export default UserProfile;
