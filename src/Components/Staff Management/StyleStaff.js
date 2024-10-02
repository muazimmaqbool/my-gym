import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch", 
        backgroundColor:"#FFFFFF",
        padding:20,
        gap:20
      },
      mainContainer:{    
        alignItems:"flex-start",
        paddingHorizontal:15,
        gap:15
      },
      userBox:{
        width:"100%",
        backgroundColor:"#F3F4F6",
        flexDirection:"row",
        alignItems:"flex-start",
        gap:20,
        padding:10,
        borderRadius:10,
      },
      name:{
        color:"#1D1E25",
        fontWeight:"700",
        fontSize:17
      },
      demographic:{
        color:"#808D9E",
        fontSize:15,
        fontWeight:"400"
      },
      address:{
        color:"#808D9E",
        fontSize:14,
        fontWeight:"400"
      },
      noData:{
        color:"#6B7280CC",
        fontWeight:"500",
        fontSize:17,
        textAlign:"center"
      }
})