import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleSettings";
import { Button, Modal } from "react-native-paper";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

//called from HomeScreen and its navigated in HomeStack.jsx
const Settings = ({ navigation }) => {
  const [showModal, setshowModal] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.topBtns}>
          <Pressable
            onPress={() => navigation.navigate("homeScreen")}
            style={styles.btn}
          >
            <AntDesign name="back" size={20} color="white" />
            {/* <Ionicons name="arrow-back-circle-outline" size={24} color="black" /> */}
            <Text style={styles.btnText}>Home</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={()=>setshowModal(true)}>
            <Text style={styles.btnText}>Edit</Text>
            <Feather name="edit" size={20} color="white" />
          </Pressable>
        </View>
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
      </View>
      <View style={styles.mainView}></View>

      <Modal
        visible={showModal}
        onDismiss={() => setshowModal(false)}
        contentContainerStyle={styles.editModal}
      >
        <View style={styles.modalContentContainer}>
          <Text>Edit Gym Details</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;
