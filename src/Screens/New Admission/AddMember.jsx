import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleAddMember";
import {
  Button,
  TextInput,
  RadioButton,
  Avatar,
  Icon,
} from "react-native-paper";
import testImg from "../../../assets/images/Test Images/male.jpg";

//called from HomeScreen and Allmembers and its navigated in HomeStack.jsx
const AddMember = ({ navigation }) => {
  const [gender, setgender] = useState("Male");
  console.log("gender", gender);

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
            <Avatar.Image size={80} source={testImg} />
            <View style={styles.selectImg}>
              <Icon source="camera" color={"blue"} size={30} />
            </View>
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
    </View>
  );
};

export default AddMember;
