import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleaAllMembers";
import { Avatar, Button, Divider, TextInput } from "react-native-paper";
import users from "../../dummyUsers";

const AllMembers = () => {
  //console.log(users)
  const [searchText, setsearchText] = useState("");
  console.log("Search text", searchText);
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={searchText}
          onChangeText={(e) => setsearchText(e)}
          mode="outlined"
          label="Search Member"
          placeholder="Eg: Muazim Maqbool"
          right={<TextInput.Icon icon="account-search-outline" />}
          outlineColor="#3a86ff"
          activeOutlineColor="#3a86ff"
          style={styles.textInput}
        />

        <View style={styles.searchBtns}>
          <Button
            outlineColor="#DBDBDB"
            textColor="#63676B"
            mode="text"
            icon="sort-ascending"
            onPress={() => console.log("Pressed")}
          >
            Sort
          </Button>
          <Button
            outlineColor="#DBDBDB"
            textColor="#63676B"
            mode="text"
            icon="filter-variant"
            onPress={() => console.log("Pressed")}
          >
            Filter
          </Button>
        </View>
      </View>
      {/* <Divider style={{ backgroundColor: "#DBDBDB", height: 1 }} /> */}

      <ScrollView style={styles.userListContainer}>
        <View style={styles.usersList}>
          {users &&
            users.map((item, index) => (
              <Pressable key={index} style={styles.userBox}>
                <Avatar.Image size={50} source={item.image} />
                <View>
                  <Text>{item.name}</Text>
                  <Text>{item.age} Years Old {item.gender}</Text>
                  <Text>{item.address}</Text>
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllMembers;
