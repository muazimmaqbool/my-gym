import { View, Text } from "react-native";
import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";
import { styles } from "./StyleDashboard";

const Dashboard = () => {
  const renderCard = (title) => {
    return (
      <Card.Title
        title={title}
        //subtitle="Card Subtitle"
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
        right={(props) => (
          <IconButton {...props} icon="dots-vertical" onPress={() => {}} />
        )}
        style={{backgroundColor:"#F8F8FB",borderRadius:10}}
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
          {renderCard("Members Overview")}
          {renderCard("Staff Management")}
          {renderCard("Notifications & Alerts")}
          {renderCard("Inventory Management")}
          {renderCard("Billing and Payments")}
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
