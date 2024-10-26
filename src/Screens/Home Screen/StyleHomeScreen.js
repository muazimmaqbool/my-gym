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
  bgImage:{
    flex:1,
    opacity:1
   },
  mainView: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    gap:20,
    paddingTop:30,
  },
  fieldContainer:{
    flexDirection:"row",
    alignItems: "center",
    gap:10,
    backgroundColor:"#F8F8FB",
    borderRadius:10,
    padding:15,
  },
  fieldText:{
    fontWeight: "300",
    color: "#1D1E25",
    fontSize: 17,
  },
  developerInfo:{
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    paddingBottom:15,
  },
  devText:{
    color:"#0000009E"
  },
  devName:{
    borderBottomColor:"#000000",
    borderBottomWidth:1,
    fontWeight:"400"
  }
 
});
