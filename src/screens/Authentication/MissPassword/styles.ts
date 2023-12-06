import { StyleSheet } from "react-native";

import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  inputs: {
    width: "100%",
  },
  title: {
    textAlignVertical: "center",
    fontSize: 18,
    borderRadius: 10,
    borderLeftColor: THEME.COLORS.LIGHT_BLUE,
    borderLeftWidth: 2,
    paddingLeft: 15,
    backgroundColor: THEME.COLORS.GREY_100,
    width: "100%",
    height: 50,
  },
  textInput: {
    width: "100%",
    height: 60,
    marginTop: 40,
    marignBottom: 40,
    color: THEME.COLORS.PRIMARY_LIGHT,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
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
    borderRadius: 25,
  },
});
