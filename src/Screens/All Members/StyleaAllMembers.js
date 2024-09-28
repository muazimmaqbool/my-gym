import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch", 
        backgroundColor:"#FFFFFF",
        gap:5
      },
      searchContainer:{
        paddingHorizontal:15,
        paddingTop:15,
        gap:5,
      },
      topButtons:{
        flexDirection:"row",
        justifyContent:"space-between",
      },
      textInput:{
        width:"100%",
        height:40,
        fontSize:16
      },

      userListContainer:{
        flex:1,
        //backgroundColor:"blue",
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        borderWidth:2,
        borderColor:"#DBDBDB",
      },
      usersList:{
        paddingHorizontal:30,
        paddingVertical:20,
        gap:25,
      },
      userBox:{
        flexDirection:"row",
        alignItems:"flex-start",
        gap:20,
        borderBottomColor:"#DBDBDB",
        borderBottomWidth:1,
        paddingBottom:10
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