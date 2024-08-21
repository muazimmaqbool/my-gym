import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        padding:15,
        backgroundColor:"#FFFFFF"
      },
      searchContainer:{
        gap:10,
      },
      searchBtns:{
        flexDirection:"row",
        justifyContent:"flex-end",
        gap:10
      }
})