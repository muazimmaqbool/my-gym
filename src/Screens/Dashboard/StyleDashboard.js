import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#3a86ff",
  },
  topBar: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  gymName: {
    fontWeight: "700",
    color: "#F9FAFB",
    fontSize: 35,
  },
  address: {
    fontWeight: "400",
    color: "#FFFFFF",
    fontSize: 20,
  },
  mainView: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    gap: 20,
    paddingTop: 30,
  },
});
