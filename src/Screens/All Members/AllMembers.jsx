import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./StyleaAllMembers";
import { Avatar, Button, Divider, TextInput } from "react-native-paper";
import users from "../../dummyUsers";

//called from HomeScreen and its navigated from HomeStack
const AllMembers = ({navigation}) => {
  //console.log(users)
  const [searchText, setsearchText] = useState("");
  const [filteredUsers, setfilteredUsers] = useState([]);
  //console.log("Search text", searchText);

  const handleSearchText=(input)=>{
    setsearchText(input)
    if(input.length>0){
      const filterUsers=users.filter((user)=>user?.first_name.toLowerCase().includes(input.toLowerCase()))
      setfilteredUsers(filterUsers)
    }else{
      setfilteredUsers(users)
    }
  }
  useEffect(()=>{
    if(users.length>0){
      console.log("running")
      setfilteredUsers(users)
      setsearchText("")
    }
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          value={searchText}
          onChangeText={handleSearchText}
          mode="outlined"
          label="Search Member"
          placeholder="Eg: Muazim Maqbool"
          right={<TextInput.Icon icon="account-search-outline" />}
          outlineColor="#3a86ff"
          activeOutlineColor="#3a86ff"
          style={styles.textInput}
        />

        <View style={styles.topButtons}>
          <Button
          contentStyle={{ flexDirection: "row-reverse" }}
            outlineColor="#DBDBDB"
            textColor="#63676B"
            mode="text"
            icon="account-plus-outline"
            onPress={() => navigation.navigate("addMember")}
          >
            Add New
          </Button>
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
      </View>
      {/* <Divider style={{ backgroundColor: "#DBDBDB", height: 1 }} /> */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.userListContainer}
      >
        <View style={styles.usersList}>
          {filteredUsers && filteredUsers.length>0 ? <>{
             filteredUsers.map((item, index) => (
              <Pressable key={index} style={styles.userBox} onPress={()=>navigation.navigate("userProfile",{user:item,navigation:navigation})}>
                <Avatar.Image size={60} source={item.image} />
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{item.first_name} {item.last_name}</Text>
                  <Text style={styles.demographic}>
                    {item.age} Years Old {item.gender}
                  </Text>
                  <Text style={styles.address}>{item.address}</Text>
                </View>
              </Pressable>
            ))
          }</>:<Text style={styles.noData}>No Member Found</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

export default AllMembers;
