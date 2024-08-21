import { View, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleaAllMembers";
import { TextInput } from "react-native-paper";

const AllMembers = () => {
  const [searchText, setsearchText] = useState("");
  console.log("Search text",searchText)
  return (
    <View style={styles.container}>
      <View>
        <TextInput
        value={searchText}
        onChangeText={(e)=>setsearchText(e)}
          mode="outlined"
          label="Search Member"
          placeholder="Eg: Muazim Maqbool"
          right={<TextInput.Icon icon="account-search-outline" />}
        />
      </View>
    </View>
  );
};

export default AllMembers;
