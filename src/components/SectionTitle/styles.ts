import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    textAlign: "left",
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgb(150,150,150)",
  },
  seeMore: {
    color: THEME.COLORS.BLUE,
    fontWeight: "500",
    padding: 10,
  },
});
