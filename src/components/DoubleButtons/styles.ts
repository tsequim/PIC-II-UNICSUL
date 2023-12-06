import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  loading: {
    padding: 20,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },
  button: {
    width: "100%",
    marginBottom: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor: THEME.COLORS.PRIMARY_LIGHT,
  },
});
