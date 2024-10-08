import { View, Text, Pressable } from "react-native";
import React from "react";
import { Avatar, Button, Card, IconButton } from "react-native-paper";
import { styles } from "./StyleDashboard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

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
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
        <View>
          
        </View>
      </View>

      <View style={styles.mainView}>
        <View style={styles.cardsContainer}>
          {renderCard("Members Overview"," ", "account-supervisor","membersOverview")}
          {renderCard("Staff Management"," ", "account-tie","staffManagement")}
          {renderCard("Notifications Settings","coming soon", "message-alert","notificationAlerts")}
          {renderCard("Inventory Management","coming soon", "office-building-cog-outline","inventory")}
          {renderCard("Billing and Payments","coming soon", "currency-usd","billings")}
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
