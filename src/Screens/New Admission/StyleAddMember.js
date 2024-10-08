import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch", 
        backgroundColor:"#FFFFFF",
        padding:20,
      },
      inputContainer:{
        gap:15,
      },
      imgContainer:{
        alignItems: "center",
        justifyContent: "center",
      },
      editImg:{
        position: "absolute",
        top:0,
        left:"23%",
      },
      selectImg:{
        width:80,
        height:80,
        backgroundColor:"#F8F8FB",
        borderRadius:50,
        justifyContent: "center",
        alignItems: "center",
      },
      textInput:{
        width:"100%",
        height:40,
        fontSize:16
      },
      buttons:{
        flexDirection:"row",
        justifyContent:"center",
        gap:15,
        paddingTop:20
      },
      genderText:{
        color:"#737373",
        fontSize:17,
        fontWeight:"500"
      },
})