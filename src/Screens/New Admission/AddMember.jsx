import { View, Text, ScrollView, Pressable, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./StyleAddMember";
import {
  Button,
  TextInput,
  RadioButton,
  Avatar,
  Icon,
  Dialog,
  Badge,
} from "react-native-paper";
import testImg from "../../../assets/images/Test Images/male.jpg";
import * as ImagePicker from "expo-image-picker";

//called from HomeScreen and Allmembers and its navigated in HomeStack.jsx
const AddMember = ({ navigation }) => {
  const [gender, setgender] = useState("Male");
  //console.log("gender", gender);
  const [image, setImage] = useState();
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const libraryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus.status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }

        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        if (cameraStatus.status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    })();
  }, []);

  //used to select image from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0]);
      setShowDialog(false);
    }
  };

  //used to upload image from camera
  const clickImage = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [1, 1], //try [9,16] also
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.assets[0]);
        setShowDialog(false);
      }
    } catch (error) {}
  };

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
              <View>
                <Avatar.Image size={90} source={image} />
                <Pressable onPress={() => setShowDialog(true)} style={styles.editImg}>
                  <Icon
                    source="square-edit-outline"
                    color={"gray"}
                    size={25}
                  />
                </Pressable>
              </View>
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
          <Button
            onPress={clickImage}
            mode="contained"
            buttonColor="#3a86ff"
            textColor="#FFFFFF"
          >
            Use Camera
          </Button>
          <Button
            onPress={pickImage}
            mode="conatined"
            buttonColor="#3a86ff"
            textColor="#FFFFFF"
          >
            Upload Image
          </Button>
        </Dialog.Actions>
      </Dialog>
    </View>
  );
};

export default AddMember;
