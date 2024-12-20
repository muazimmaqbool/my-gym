import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleSettings";
import { Button, Modal, TextInput } from "react-native-paper";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

//called from HomeScreen and its navigated in HomeStack.jsx
const Settings = ({ navigation }) => {
  const [showModal, setshowModal] = useState(false);

  const [isEditCredentials, setisEditCredentials] = useState(false);
  const [isEditFee, setisEditFee] = useState(false);

  const renderField = (label, value) => {
    return (
      <TextInput
        value={value}
        //onChangeText={handleSearchText}
        mode="outlined"
        label={label}
        outlineColor="#3a86ff"
        activeOutlineColor="#3a86ff"
        style={styles.textInput}
      />
    );
  };

  const renderCredentialField = (label, value) => {
    return (
      <TextInput
        value={value}
        //onChangeText={handleSearchText}
        mode="outlined"
        label={label}
        outlineColor="#3a86ff"
        activeOutlineColor="#3a86ff"
        style={styles.credentialInput}
        readOnly={!isEditCredentials}
      />
    );
  };
  const renderFeeField = (label, value) => {
    return (
      <View style={styles.feeRow}>
        <Text style={styles.feeText}>{label}</Text>
        <TextInput
        value={value}
        //onChangeText={handleSearchText}
        mode="outlined"
        label={label}
        outlineColor="#3a86ff"
        activeOutlineColor="#3a86ff"
        style={styles.credentialInput}
        readOnly={!isEditFee}
      />
      </View>
    );
  };

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
          <Pressable style={styles.btn} onPress={() => setshowModal(true)}>
            <Text style={styles.btnText}>Edit</Text>
            <Feather name="edit" size={20} color="white" />
          </Pressable>
        </View>
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
      </View>
      <View style={styles.mainView}>

        <View style={styles.credentials}>
          <Button
            contentStyle={{ flexDirection: "row-reverse" }}
            icon="square-edit-outline"
            mode="text"
            onPress={() => setisEditCredentials(true)}
          >
            EDIT CREDENTIALS
          </Button>
          {renderCredentialField("Email", "hilifefitness23@gmail.com")}
          {renderCredentialField("Password", "*****")}
         {
          isEditCredentials &&  <Button
          contentStyle={{ flexDirection: "row-reverse" }}
          icon="content-save-check"
          mode="contained"
          onPress={() => setisEditCredentials(false)}
          buttonColor="#3a86ff"
        >
          SAVE
        </Button>
         }
        </View>

        <View style={styles.otherGymInfo}>
        <Button
            contentStyle={{ flexDirection: "row-reverse" }}
            icon="square-edit-outline"
            mode="text"
            onPress={() => setisEditFee(true)}
          >
            EDIT FEE STRUCTURE
          </Button>
          {renderFeeField("Admission Fee", "FREE")}
          {renderFeeField("Monthly Fee", "Rs 1000")}
          {renderFeeField("3 Months Fee", "Rs 2500")}
          {renderFeeField("6 Months Fee", "Rs 4500")}
          {renderFeeField("Yearly Fee", "Rs 9000")}
         {
          isEditFee &&  <Button
          contentStyle={{ flexDirection: "row-reverse" }}
          icon="content-save-check"
          mode="contained"
          onPress={() => setisEditFee(false)}
          buttonColor="#3a86ff"
        >
          SAVE
        </Button>
         }
        </View>
      </View>

      <Modal
        visible={showModal}
        onDismiss={() => setshowModal(false)}
        contentContainerStyle={styles.editModal}
      >
        <View style={styles.modalContentContainer}>
          <Text style={styles.boldText}>Edit Gym Details</Text>
          <View style={styles.inputFields}>
            {renderField("Name", "Hi-Life Fitness")}
            {renderField("Address", "Bilal Abad")}
            {renderField("District/Town", "Sopore")}
            {renderField("State", "Jammu and Kashmir")}
          </View>
          <View style={styles.modalButtons}>
            <Button mode="outlined" onPress={() => setshowModal(false)}>
              Back
            </Button>
            <Button
              mode="contained"
              buttonColor="#3a86ff"
              onPress={() => setshowModal(false)}
            >
              Save
            </Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Settings;
