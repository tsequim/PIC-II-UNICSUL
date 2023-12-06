import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme/index";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 15,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  location: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 15,
  },
  selectLabel: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: 15,
  },
  selectValue: {
    fontWeight: "700",
    fontSize: 15,
  },
  cartAmount: {
    width: 15,
    height: 15,
    right: -5,
    top: -5,
    position: "absolute",
    backgroundColor: THEME.COLORS.PINK,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  cartAmountText: {
    color: "white",
    fontWeight: "500",
    lineHeight: 15,
    fontSize: 12,
  },
});
