import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
        backgroundColor: "#3a86ff",
      },
      topBar: {
        height: "25%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingInline:20,
        paddingBlock:25,
      },
      header:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        justifyContent:"space-between"
      },
      title: {
        fontWeight: "700",
        color: "#F9FAFB",
        fontSize: 30,
        lineHeight:38,
      },
      subTitle: {
        fontWeight: "400",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight:24
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
      textInput:{
        width:"100%",
        height:40,
        fontSize:16
      },
      login:{
        gap:20,
      }
})