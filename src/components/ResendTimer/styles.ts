import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  timer: {
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: THEME.COLORS.CAPTION_400,
  },
});
