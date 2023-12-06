import { StyleSheet } from "react-native";

import { THEME } from "../../../../frontend/src/theme";

export const styles = StyleSheet.create({
  loading: {
    padding: 20,
  },
  icon: {
    marginTop: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  inputs: {
    width: "100%",
    marginTop: 50,
  },
  textInput: {
    width: "100%",
    height: 60,
    marginTop: 10,
    marignBottom: 10,
    color: THEME.COLORS.PRIMARY_LIGHT,
  },
  missPassword: {
    textDecorationLine: "underline",
    color: THEME.COLORS.PRIMARY_LIGHT,
    padding: 10,
    alignSelf: "flex-end",
  },
  buttons: {
    marginTop: 15,
    marginBottom: 10,
    width: "100%",
  },
  button: {
    width: "100%",
    marginBottom: 15,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
