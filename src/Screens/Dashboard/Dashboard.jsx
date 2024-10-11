import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import { styles } from "./StyleDashboard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { AntDesign, Feather } from "@expo/vector-icons";

//called from HomeScreen and its navigated in HomeStack
const Dashboard = ({ navigation }) => {
  const renderCard = (title, subTitle,icon,navigateTo) => {
    const isDisabled = subTitle === "coming soon";
    return (
     <Pressable disabled={subTitle==="coming soon"} onPress={()=>{navigation.navigate(navigateTo)}}>
       <Card.Title
        title={title}
        titleStyle={subTitle==="coming soon" && styles.disabledColor}
        subtitle={subTitle}
        subtitleStyle={subTitle==="coming soon" && styles.disabledColor}
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        right={(props) => (
          <IconButton {...props} icon="chevron-right"   onPress={() => {}} />
        )}
        
        style={styles.cardStyle}
      />
     </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <View style={styles.topBtns}>
          <Pressable onPress={()=>navigation.navigate("homeScreen")} style={styles.btn}>
          <AntDesign name="back" size={20} color="white" />
            <Text style={styles.btnText}>Home</Text>
          </Pressable>
          <Pressable onPress={()=>{navigation.navigate("settings")}} style={styles.btn}>
            <Text style={styles.btnText}>Settings</Text>
            <Feather name="settings" size={20} color="white" />
          </Pressable>
        </View>
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
      </View>

      <View style={styles.mainView}>
        <ScrollView contentContainerStyle={styles.cardsContainer}>
          {renderCard("Members Overview"," ", "account-supervisor","membersOverview")}
          {renderCard("Staff Management"," ", "account-tie","staffManagement")}
          {renderCard("Notifications Settings","coming soon", "message-alert","notificationAlerts")}
          {renderCard("Inventory Management","coming soon", "office-building-cog-outline","inventory")}
          {renderCard("Billing and Payments","coming soon", "currency-usd","billings")}
        </ScrollView>
        {/* <Button
          buttonColor="#3a86ff"
          icon="home"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => navigation.navigate("homeScreen")}
        >
          Return To Home
        </Button> */}
      </View>
    </View>
  );
};

export default Dashboard;
