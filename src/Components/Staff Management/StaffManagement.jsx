import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { Avatar, SegmentedButtons } from "react-native-paper";
import {styles} from "./StyleStaff"
import users from "../../dummyUsers"

const StaffManagement = () => {
  const [currSegment, setcurrSegment] = useState("allStaffMembers");

  const renderUser = (item, index) => {
    return (
      <Pressable
        key={index}
        style={styles.userBox}
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
          value: "all",
          label: "All",
        },
        {
          value: "trainers",
          label: "Trainers",
        },
        { value: "frontDesk", label: "Front Desk" },
      ]}
    />

    {users && users.length > 0 ? (
      <>
        {currSegment === "all" ? (
          <ScrollView contentContainerStyle={styles.mainContainer}>
            {users.map((item, index) => renderUser(item, index))}
          </ScrollView>
        ) : currSegment === "trainers" ? (
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
  )
}

export default StaffManagement