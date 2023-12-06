import { StyleSheet } from "react-native";

import { THEME } from "../../../../frontend/src/theme";

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
    marginBottom: 20,
    marginTop: 20,
  },
  textInput: {
    width: "100%",
    // height: 60,
    marginTop: 15,
    marignBottom: 15,
    color: THEME.COLORS.PRIMARY_LIGHT,
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
