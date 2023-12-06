import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  title: {
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "left",
  },
  flatList: {
    width: "100%",
    padding: 10,
  },
  scrollView: {
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
  list: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
  },
});
