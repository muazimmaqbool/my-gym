import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleMembersOverView";
import { Avatar, SegmentedButtons } from "react-native-paper";
import users from "../../dummyUsers";

const MembersOverview = ({ navigation }) => {
  const [currSegment, setcurrSegment] = useState("allMembers");
  //console.log("currSegment", currSegment)

  const renderUser = (item, index) => {
    return (
      <Pressable
        key={index}
        style={styles.userBox}
        onPress={() =>
          navigation.navigate("userProfile", {
            user: item,
            fromMembersOverview:true,
          })
        }
      >
        <Avatar.Image size={60} source={item.image} />
        <View>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.demographic}>
            {item.age} Years Old {item.gender}
          </Text>
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={currSegment}
        onValueChange={setcurrSegment}
        buttons={[
          {
            value: "allMembers",
            label: "All",
          },
          {
            value: "activeMembers",
            label: "Active",
          },
          { value: "inactiveMembers", label: "InActive" },
        ]}
      />

      {users && users.length > 0 ? (
        <>
          {currSegment === "allMembers" ? (
            <ScrollView contentContainerStyle={styles.mainContainer}>
              {users.map((item, index) => renderUser(item, index))}
            </ScrollView>
          ) : currSegment === "activeMembers" ? (
            <>
              {users.filter((user)=>user.isActive===true).length > 0 ? (
                <ScrollView contentContainerStyle={styles.mainContainer}>
                  {users
                    .filter((user) => user.isActive === true)
                    .map((item, index) => renderUser(item, index))}
                </ScrollView>
              ) : (
                <Text style={styles.noData}>No Member Found</Text>
              )}
            </>
          ) : (
            <>
              {users.filter((user)=>user.isActive===false).length > 0 ? (
                <ScrollView contentContainerStyle={styles.mainContainer}>
                  {users
                    .filter((user) => user.isActive === false)
                    .map((item, index) => renderUser(item, index))}
                </ScrollView>
              ) : (
                <Text style={styles.noData}>No Member Found</Text>
              )}
            </>
          )}
        </>
      ) : (
        <Text style={styles.noData}>No Member Found</Text>
      )}
    </View>
  );
};

export default MembersOverview;
