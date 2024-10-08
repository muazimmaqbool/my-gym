import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./StyleUserProfile";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import { Avatar, Button, Divider, Modal, Switch } from "react-native-paper";
import formatDate from "../../Utilities/formatDate";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";

//called from AllMembers.jsx, MembersOverview and its navigated in HomeStack.jsx
const UserProfile = ({ navigation, route }) => {
  const { user, fromMembersOverview } = route.params;
  //console.log(" fromMembersOverview:", fromMembersOverview)

  const [showModal, setshowModal] = useState(false);
  const [monthsPaid, setmonthsPaid] = useState([]);
  //console.log("months paid",monthsPaid)
  const [includeLockerFee, setincludeLockerFee] = useState(false);
  //console.log("includelockerfee",includeLockerFee)

  const handleMonthsPay = (month) => {
    if (monthsPaid.includes(month)) {
      setmonthsPaid(monthsPaid.filter((t) => t !== month)); // Deselect
    } else {
      setmonthsPaid([...monthsPaid, month]); // Select
    }
  };

  const renderMonthBox = (label, value) => {
    return (
      <View
        style={[
          styles.monthBox,
          user.monthsPaid.includes(value) && styles.monthPaid,
        ]}
      >
        <Text style={styles.monthName}>{label}</Text>
      </View>
    );
  };
  const renderModalMonth = (label) => {
    return (
      <TouchableOpacity
        style={[
          styles.monthModalBox,
          monthsPaid.includes(label) && styles.selectedMonth,
        ]}
        onPress={() => handleMonthsPay(label)}
      >
        <Text
          style={[
            styles.monthName,
            monthsPaid.includes(label) && styles.selectedText,
          ]}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const handleBack=()=>{
    if( fromMembersOverview){
      navigation.navigate("membersOverview")
    }else{
      navigation.navigate("allMembers")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.arrowBack}>
        <Ionicons
          onPress={handleBack}
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
            <Text style={styles.miniBoldText}>Joining Date</Text>
            <Text style={styles.joiningDate}>
              {formatDate.dateToDDMMYYYY(user.joiningDate)}
            </Text>
          </View>
          <View style={styles.topTextContainer}>
            <Text style={styles.miniBoldText}>Current Satus</Text>
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
          {user.fee && (
            <View style={styles.currFeeStatus}>
              <Text style={styles.miniBoldText}>01 Sept 2024 - </Text>
              <Text style={styles.miniBoldText}>Valid Till 01 Aug 2024</Text>
            </View>
          )}
          <View style={user.fee ? styles.amount : styles.amountNotPaid}>
            {user.fee ? (
              <>
                <View style={styles.subAmount}>
                  <Text style={styles.boldText}>Fee: Paid </Text>
                  <AntDesign name="checkcircle" size={24} color="#48BD69" />
                </View>
                <View style={styles.subAmount}>
                  <Text style={styles.boldText}>Locker: Paid </Text>
                  <AntDesign name="checkcircle" size={24} color="#48BD69" />
                </View>
              </>
            ) : (
              <>
                <View style={styles.subAmount}>
                  <Text style={styles.boldText}>Fee: Not Paid Yet </Text>
                  <MaterialIcons name="error" size={24} color="#E63535" />
                </View>
                <Button
                  mode="contained"
                  buttonColor="#3a86ff"
                  onPress={() => setshowModal(true)}
                >
                  Pay Now
                </Button>
              </>
            )}
          </View>
        </View>

        <View style={styles.monthlyContainer}>
          {renderMonthBox("Jan", 0)}
          {renderMonthBox("Feb", 1)}
          {renderMonthBox("Mar", 2)}
          {renderMonthBox("Apr", 3)}
          {renderMonthBox("May", 4)}
          {renderMonthBox("Jun", 5)}
          {renderMonthBox("Jul", 6)}
          {renderMonthBox("Aug", 7)}
          {renderMonthBox("Sep", 8)}
          {renderMonthBox("Oct", 9)}
          {renderMonthBox("Nov", 10)}
          {renderMonthBox("Dec", 11)}
        </View>
        <View style={styles.buttomContainer}>
          {user.assignedLocker ? (
            <View style={styles.lockerContainer}>
              <View style={styles.locker}>
                <Text style={styles.miniBoldText}>
                  Assigned Locker: {user.assignedLocker}
                </Text>
              </View>
              <Button
                icon="archive-lock-outline"
                mode="outlined"
                onPress={() => console.log("Pressed")}
              >
                Remove Locker
              </Button>
            </View>
          ) : (
            <Button
              contentStyle={{ flexDirection: "row-reverse" }}
              mode="outlined"
              icon="locker-multiple"
            >
              Assign Locker
            </Button>
          )}
          <Button
            contentStyle={{ flexDirection: "row-reverse" }}
            mode="contained"
            icon="delete"
            buttonColor="#3a86ff"
          >
            Remove User
          </Button>
        </View>
      </View>

      <Modal
        visible={showModal}
        onDismiss={() => setshowModal(false)}
        contentContainerStyle={styles.feeModal}
      >
        <View style={styles.modalContentContainer}>
          <Text style={styles.boldText}>Gym Fee Of Month</Text>
          <View style={styles.monthModalContainer}>
            {renderModalMonth("Jan")}
            {renderModalMonth("Feb")}
            {renderModalMonth("Mar")}
            {renderModalMonth("Apr")}
            {renderModalMonth("May")}
            {renderModalMonth("Jun")}
            {renderModalMonth("Jul")}
            {renderModalMonth("Aug")}
            {renderModalMonth("Sep")}
            {renderModalMonth("Oct")}
            {renderModalMonth("Nov")}
            {renderModalMonth("Dec")}
          </View>
          {user.assignedLocker && (
            <View style={[styles.modalButtons, { gap: 5 }]}>
              <Text style={styles.miniBoldText}>Including Locker Fee:</Text>
              <Switch
                value={includeLockerFee}
                onValueChange={() => setincludeLockerFee(!includeLockerFee)}
              />
            </View>
          )}
          <View style={styles.modalButtons}>
            <Button mode="outlined" onPress={() => setshowModal(false)}>
              Back
            </Button>
            <Button
              mode="contained"
              buttonColor="#3a86ff"
              onPress={() => setshowModal(false)}
              disabled={monthsPaid.length === 0}
            >
              Save
            </Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default UserProfile;
