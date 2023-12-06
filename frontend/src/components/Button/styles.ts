import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 0.7)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 20,
    height: 40,
    minWidth: 105,
  },
  text: {
    color: "black",
  },
  icon: {
    // width: 20,
    // height: 20,
    marginRight: 5,
  },
});
