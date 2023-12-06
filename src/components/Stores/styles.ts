import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  flatList: {
    width: "100%",
    paddingRight: 25,
  },
  contentsList: {
    width: "100%",
    padding: 10,
  },
  storeList: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingVertical: 10,
    paddingRight: 20,
    backgroundColor: "#fff",
  },
});
