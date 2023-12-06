import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginLeft: 50,
  },
  colors: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "500",
    paddingBottom: 10,
  },
});

export const colorStyles = (color = "", isSelected = false) => ({
  backgroundColor: color,
  width: 20,
  height: 20,
  marginRight: 8,
  borderRadius: 20,
  borderColor: isSelected ? THEME.COLORS.CAPTION_200 : "",
  borderWidth: isSelected ? 2 : 0,
});
