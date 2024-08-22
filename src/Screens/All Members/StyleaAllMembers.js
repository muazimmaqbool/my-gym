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
      searchBtns:{
        flexDirection:"row",
        justifyContent:"flex-end",
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
        borderColor:"#DBDBDB"
      }

})