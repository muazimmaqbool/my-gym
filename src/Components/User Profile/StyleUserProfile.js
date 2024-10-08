import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#3a86ff",
  },
  arrowBack: {
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 15,
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
  demographic: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "400",
  },
  userImg: {
    position: "absolute",
    top: "20%",
    zIndex: 2,
    right: "40%",
    backgroundColor: "#3a86ff",
    borderRadius: 50,
    padding: 5,
  },
  mainView: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingVertical: 20,
    paddingHorizontal: 30,
    gap: 15,
  },
  mainTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  topTextContainer: {
    alignItems: "center",
  },
  miniBoldText: {
    fontWeight: "600",
    color: "#1D1E25",
    fontSize: 14,
  },
  joiningDate: {
    fontWeight: "700",
    color: "#808D9E",
    fontSize: 13,
  },
  status: {
    fontWeight: "700",
    color: "#0284C7",
    fontSize: 13,
  },
  boldText: {
    fontWeight: "500",
    color: "#1D1E25",
    fontSize: 16,
  },

  currentMonth: {
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderLeftColor: "#DBDBDB",
    borderRightColor: "#DBDBDB",
    borderBottomColor: "#DBDBDB",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,

    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    shadowColor: "#DBDBDB40",
  },
  currFeeStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // gap:15,
  },

  amount: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#EDFCF2",
    borderLeftColor: "#66B584",
    borderLeftWidth: 6,
    padding: 10,
    borderRadius: 5,
  },
  amountNotPaid: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FEF1F1",
    borderLeftColor: "#F87171",
    borderLeftWidth: 6,
    padding: 10,
    borderRadius: 5,
  },
  subAmount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  monthlyContainer: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    borderLeftColor: "#DBDBDB",
    borderRightColor: "#DBDBDB",
    borderTopColor: "#DBDBDB",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,

    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 1,
    shadowColor: "#DBDBDB40",
  },
  monthBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 10,
  },
  monthName: {
    fontWeight: "700",
    color: "#1D1E25",
    fontSize: 14,
  },
  buttomContainer: {
    gap: 15,
    alignItems: "stretch",
    justifyContent: "center",
  },
  lockerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  locker: {
    backgroundColor: "#EBF8FE",
    borderLeftColor: "#7DD3FC",
    borderLeftWidth: 6,
    padding: 10,
    borderRadius: 5,
  },
  feeModal: {
    zIndex:5,
    marginTop:15,
    backgroundColor: "white",
    width: "80%",
    height:"45%",
    alignSelf: "center",
    padding: 15,
    borderRadius: 20,
  },
  modalContentContainer: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap:10
  },
  monthModalContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  monthModalBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#DBDBDB",
    borderRadius: 10,
  },
  selectedMonth:{
    backgroundColor:"#3a86ff"
  },
  selectedText:{
    color: "#FFFFFF",
  },
  modalButtons:{
    flexDirection:"row",
    alignItems: "center",
    justifyContent:"center",
    gap:20
  },
  monthPaid:{
   backgroundColor:"#8DE88D"
  },
  monthNotPaid:{
    backgroundColor: "#FEF1F1",
  }
});
