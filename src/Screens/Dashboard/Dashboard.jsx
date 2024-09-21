import { View, Text } from "react-native";
import React from "react";
import { Avatar, Card, IconButton } from "react-native-paper";
import { styles } from "./StyleDashboard";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.gymName}>Hi-Life Fitness</Text>
        <Text style={styles.address}>Bilal Abad Sopore</Text>
      </View>

      <View style={styles.mainView}>

      </View>
    </View>
  );
};

export default Dashboard;
