import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: "#3a86ff",
  },
  topBar: {
    height: "25%",
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
    paddingVertical: 25,
    paddingHorizontal: 30,
    paddingTop: 40,
    justifyContent: "space-between",
  },
  cardsContainer: {
    gap: 15,
  },
  cardStyle: {
    backgroundColor: "#F8F8FB",
    borderRadius: 10,
    fontWeight: "300",
    color: "#1D1E25",
    fontSize: 170,
  },
   disabledColor: { 
    color:"#808D9E",
  },
});
