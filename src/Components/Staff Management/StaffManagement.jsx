import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import { Avatar, SegmentedButtons } from "react-native-paper";
import { styles } from "./StyleStaff";
import staffUsers from "../../dummyStaff";

const StaffManagement = () => {
  const [currSegment, setcurrSegment] = useState("all");

  const renderUser = (item, index) => {
    return (
      <Pressable key={index} style={styles.userBox}>
        <Avatar.Image size={60} source={item.image} />
        <View>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.demographic}>
            {item.role === "frontDesk " ? "Front Desk" : "Trainer"}
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

      {staffUsers && staffUsers.length > 0 ? (
        <>
          {currSegment === "all" ? (
            <ScrollView contentContainerStyle={styles.mainContainer}>
              {staffUsers.map((item, index) => renderUser(item, index))}
            </ScrollView>
          ) : currSegment === "trainers" ? (
            <>
              {staffUsers.filter((user) => user.role === "trainer").length > 0 ? (
                <ScrollView contentContainerStyle={styles.mainContainer}>
                  {staffUsers
                    .filter((user) => user.role === "trainer")
                    .map((item, index) => renderUser(item, index))}
                </ScrollView>
              ) : (
                <Text style={styles.noData}>No Member Found</Text>
              )}
            </>
          ) : (
            <>
              {staffUsers.filter((user) => user.role === "frontDesk").length > 0 ? (
                <ScrollView contentContainerStyle={styles.mainContainer}>
                  {staffUsers
                    .filter((user) => user.role === "frontDesk")
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

export default StaffManagement;
