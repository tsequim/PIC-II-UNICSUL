import { StyleSheet } from "react-native";

import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  title: {
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
    marginBottom: 30,
  },
  inputs: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    // height: 60,
    marginTop: 10,
    marignBottom: 10,
    color: THEME.COLORS.PRIMARY_LIGHT,
  },
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
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
    borderRadius: 25,
  },
});
