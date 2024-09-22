import { View, Text } from "react-native";
import React from "react";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import { styles } from "./StyleDashboard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Dashboard = ({ navigation }) => {
  const renderCard = (title, icon) => {
    return (
      <Card.Title
        title={title}
        //subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon={icon} />}
        right={(props) => (
          <IconButton {...props} icon="chevron-right" onPress={() => {}} />
        )}
        style={{ backgroundColor: "#F8F8FB", borderRadius: 10 }}
      />
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
          {renderCard("Members Overview", "account-supervisor")}
          {renderCard("Staff Management", "account-tie")}
          {renderCard("Notifications & Alerts", "message-alert")}
          {renderCard("Inventory Management", "office-building-cog-outline")}
          {renderCard("Billing and Payments", "currency-usd")}
        </View>
        <Button
          buttonColor="#3a86ff"
          icon="home"
          mode="contained"
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() => navigation.navigate("homeScreen")}
        >
          Go TO HOME
        </Button>
      </View>
    </View>
  );
};

export default Dashboard;
