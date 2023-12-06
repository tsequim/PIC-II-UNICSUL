import { StyleSheet } from "react-native";

import { THEME } from "../../../frontend/src/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textAlignVertical: "center",
    borderRadius: 10,
    borderLeftColor: THEME.COLORS.LIGHT_BLUE,
    borderLeftWidth: 2,
    paddingLeft: 15,
    backgroundColor: THEME.COLORS.GREY_100,
    width: "100%",
    height: 50,
    marginBottom: 20,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginLeft: 5,
  },
});
