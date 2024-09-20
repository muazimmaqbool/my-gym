import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleAddMember";
import {
  Button,
  TextInput,
  RadioButton,
  Avatar,
  Icon,
  Dialog,
} from "react-native-paper";
import testImg from "../../../assets/images/Test Images/male.jpg";

//called from HomeScreen and Allmembers and its navigated in HomeStack.jsx
const AddMember = ({ navigation }) => {
  const [gender, setgender] = useState("Male");
  //console.log("gender", gender);
  const [image, setImage] = useState();
  const [showDialog, setShowDialog] = useState(false);

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

  const renderGenderFields = () => {
    return (
      <View>
        <Text style={styles.genderText}>Gender</Text>
        <RadioButton.Group
          onValueChange={(value) => setgender(value)}
          value={gender}
          style={styles.radioBox}
        >
          <RadioButton.Item color="#3a86ff" label="Male" value="Male" />
          <RadioButton.Item color="#3a86ff" label="Female" value="Female" />
        </RadioButton.Group>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.inputContainer}>
          <View style={styles.imgContainer}>
            {image ? (
              <Avatar.Image size={80} source={testImg} />
            ) : (
              <Pressable
                style={styles.selectImg}
                onPress={() => setShowDialog(true)}
              >
                <Icon source="camera" color={"#3a86ff"} size={40} />
              </Pressable>
            )}
          </View>
          {renderField("First Name")}
          {renderField("Last Name")}
          {renderGenderFields()}
          {renderField("Occupation")}
          {renderField("Age")}
          {renderField("Address")}
          {renderField("Pincode")}
          {renderField("Town/District")}
          {renderField("State/UT")}
          {renderField("Country")}
        </View>
        <View style={styles.buttons}>
          <Button
            buttonColor="#E3242B"
            style={{ width: "40%" }}
            mode="contained"
            onPress={() => navigation.navigate("homeScreen")}
          >
            Cancel
          </Button>
          <Button
            buttonColor="#3a86ff"
            style={{ width: "40%" }}
            mode="contained"
          >
            Save Details
          </Button>
        </View>
      </ScrollView>
      <Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
        <Dialog.Title>Select an Image</Dialog.Title>
        {/* <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content> */}
        <Dialog.Actions>
          <Button mode="contained" buttonColor="#3a86ff" textColor="#FFFFFF">Use Camera</Button>
          <Button mode="conatined" buttonColor="#3a86ff" textColor="#FFFFFF" >Upload Image</Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default AddMember;
