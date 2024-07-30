import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const FrontScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button mode="outlined" onPress={() => console.log("Pressed")}>
        Click Me!
      </Button>
    </View>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
