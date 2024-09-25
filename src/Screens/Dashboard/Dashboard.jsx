import { View, Text, Pressable } from "react-native";
import React from "react";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import { styles } from "./StyleDashboard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Dashboard = ({ navigation }) => {
  const renderCard = (title, icon,navigateTo) => {
    return (
     <Pressable onPress={()=>{navigation.navigate(navigateTo)}}>
       <Card.Title
        title={title}
        //subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        right={(props) => (
          <IconButton {...props} icon="chevron-right" onPress={() => {}} />
        )}
        style={styles.cardStyle}
        
      />
     </Pressable>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
      </View>

      <View style={styles.mainView}>
        <View style={styles.cardsContainer}>
          {renderCard("Members Overview", "account-supervisor","membersOverview")}
          {renderCard("Staff Management", "account-tie","staffManagement")}
          {renderCard("Notifications & Alerts", "message-alert","notificationAlerts")}
          {renderCard("Inventory Management", "office-building-cog-outline","inventory")}
          {renderCard("Billing and Payments", "currency-usd","billings")}
        </View>
        <Button
          buttonColor="#3a86ff"
          icon="home"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => navigation.navigate("homeScreen")}
        >
          Return To Home
        </Button>
      </View>
    </View>
  );
};

export default Dashboard;
