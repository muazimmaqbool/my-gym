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
        gap:20
      },
      mainTop:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        paddingHorizontal:15,
        
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
      },
      currentMonth:{
        borderRadius:10,
        padding:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderLeftColor:"#DBDBDB",
        borderRightColor:"#DBDBDB",
        borderBottomColor:"#DBDBDB",
        borderLeftWidth:1,
        borderRightWidth:1,
        borderBottomWidth:1,

        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
        elevation:1,
        shadowColor:"#DBDBDB40" ,
      },
      monthText:{
        fontWeight: "500",
        color: "#1D1E25",
        fontSize: 16,
      },
      validTill:{
        fontWeight: "500",
        color: "#1D1E25",
        fontSize: 14,
      },
      fee:{
        fontWeight: "500",
        color: "#0284C7",
        fontSize: 14,
      }
})