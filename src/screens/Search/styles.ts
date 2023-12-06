import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  searchInput: {
    backgroundColor: THEME.COLORS.GREY_100,
    margin: 10,
  },
  searchFor: {
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
    paddingHorizontal: 12,
    paddingBottom: 10,
    height: "100%",
  },
});
