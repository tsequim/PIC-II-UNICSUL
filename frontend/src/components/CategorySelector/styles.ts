import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme/index";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  contentsList: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  // cover: {
  //   width: 240,
  //   height: 320,
  //   justifyContent: "flex-end",
  //   borderRadius: 8,
  //   overflow: "hidden",
  // },
  // footer: {
  //   width: "100%",
  //   height: 102,
  //   padding: 16,
  //   justifyContent: "flex-end",
  // },
  // name: {
  //   color: THEME.COLORS.TEXT,
  //   fontSize: THEME.FONT_SIZE.MD,
  //   fontFamily: THEME.FONT_FAMILY.BOLD,
  // },
  // ads: {
  //   color: THEME.COLORS.CAPTION_300,
  //   fontSize: THEME.FONT_SIZE.MD,
  //   fontFamily: THEME.FONT_FAMILY.REGULAR,
  // },
});
