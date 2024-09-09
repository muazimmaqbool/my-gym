import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "./StyleUserProfile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { Avatar } from "react-native-paper";
import formatDate from "../../Utilities/formatDate";

//called from AllMembers.jsx and its navigated in HomeStack.jsx
const UserProfile = ({ navigation, route }) => {
  const { user } = route.params;
  //console.log("user recived:",user)
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
            <Text style={styles.status}>Active</Text>
          </View>
        </View>

        <View style={styles.currentMonth}>
          <View>
            <Text style={styles.monthText}>01 Sept 2024</Text>
            <Text style={styles.validTill}>
              Valid Till <Text style={{ color: "#0284C7" }}>01 Aug 2024</Text>
            </Text>
          </View>
          {/* <View>
            <Text style={styles.monthText}>Paid</Text>
            <Text style={styles.fee}>₹1000</Text>
          </View> */}
        </View>

        <View style={styles.monthlyContainer}></View>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
