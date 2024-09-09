import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "#3a86ff",
      },
      arrowBack:{
        height:"10%",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-end",
        paddingHorizontal:15
      },
      topBar: {
        height: "15%",
        alignItems: "center",
        justifyContent: "flex-start",
      },
      name: {
        fontWeight: "600",
        color: "#F9FAFB",
        fontSize: 30,
      },
      address: {
        fontWeight: "400",
        color: "#FFFFFF",
        fontSize: 15,
      },
      demographic:{
        color:"#FFFFFF",
        fontSize:15,
        fontWeight:"400"
      },
      userImg:{
        position:"absolute",
        top:"20%",
        zIndex:2,
        right:"40%",
        backgroundColor:"#3a86ff",
        borderRadius:50,
        padding:5,
      },
      mainView: {
        flex: 1,
        backgroundColor: "white",
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        paddingVertical: 20,
        paddingHorizontal: 30,
        
      },
      mainTop:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal:15
      },
      topTextContainer:{
        alignItems:"center"
      },
      mainTopTitle:{
        fontWeight: "600",
        color: "#1D1E25",
        fontSize: 14,
      },
      joiningDate:{
        fontWeight: "700",
        color: "#808D9E",
        fontSize: 13,
      },
      status:{
        fontWeight: "700",
        color: "#0284C7",
        fontSize: 13,
      }
})