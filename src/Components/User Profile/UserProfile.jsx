import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./StyleUserProfile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { Avatar, Button } from "react-native-paper";
import formatDate from "../../Utilities/formatDate";

//called from AllMembers.jsx and its navigated in HomeStack.jsx
const UserProfile = ({ navigation, route }) => {
  const { user } = route.params;
  //console.log("user recived:",user)

  const renderMonthBox = (label) => {
    return (
      <View style={styles.monthBox}>
        <Text style={styles.monthName}>{label}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.arrowBack}>
        <Ionicons
          onPress={() => navigation.navigate("allMembers")}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Feather name="edit" size={25} color="white" />
      </View>
      <View style={styles.topBar}>
        {user && (
          <>
            <Text style={styles.name}>
              {user.first_name} {user.last_name}
            </Text>
            <Text style={styles.demographic}>
              {user.age} Years Old {user.gender}
            </Text>
            <Text style={styles.address}>{user.address}</Text>
          </>
        )}
      </View>
      <View style={styles.userImg}>
        <Avatar.Image size={80} source={user.image} />
      </View>

      <View style={styles.mainView}>
        <View style={styles.mainTop}>
          <View style={styles.topTextContainer}>
            <Text style={styles.mainTopTitle}>Joining Date</Text>
            <Text style={styles.joiningDate}>
              {formatDate.dateToDDMMYYYY(user.joiningDate)}
            </Text>
          </View>
          <View style={styles.topTextContainer}>
            <Text style={styles.mainTopTitle}>Current Satus</Text>
            <Text
              style={[
                styles.status,
                { color: user.isActive ? "#0284C7" : "#F87171" },
              ]}
            >
              {user.isActive ? "Active" : "Inactive"}
            </Text>
          </View>
        </View>

        <View style={styles.currentMonth}>
          <View style={styles.currFeeStatus}>
            <Text style={styles.monthText}>01 Sept 2024 - </Text>
            <Text style={styles.monthText}>Valid Till 01 Aug 2024</Text>
          </View>
          <View style={styles.amount}>
            <Text style={styles.monthText}>Paid</Text>
          </View>
        </View>

        <View style={styles.monthlyContainer}>
          {renderMonthBox("Jan")}
          {renderMonthBox("Feb")}
          {renderMonthBox("Mar")}
          {renderMonthBox("Apr")}
          {renderMonthBox("May")}
          {renderMonthBox("Jun")}
          {renderMonthBox("Jul")}
          {renderMonthBox("Aug")}
          {renderMonthBox("Sep")}
          {renderMonthBox("Oct")}
          {renderMonthBox("Nov")}
          {renderMonthBox("Dec")}
        </View>
        <View>
          <Button
          contentStyle={{ flexDirection: "row-reverse" }}
            mode="outlined"
            icon="delete"
          >
            Remove User
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
