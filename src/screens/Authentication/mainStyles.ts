import { StyleSheet } from "react-native";

import { THEME } from "../../theme";

export const mainStyles = StyleSheet.create({
  background: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
  },
  container: {
    padding: 20,
    paddingBottom: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffefe1",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "500",
    marginTop: 20,
    alignSelf: "flex-start",
  },
  inputs: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    // height: 60,
    marginTop: 15,
    marignBottom: 15,
    color: THEME.COLORS.PRIMARY_LIGHT,
    textAlign: "left",
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
  notificationTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
  notificationStyle: { height: 80, justifyContent: "center", paddingTop: 40 },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: "center",
  },
  containerStyle: {
    flex: 1,
  },
  cepLoading: {
    position: "absolute",
    top: 127,
    right: 20,
  },
  logo: {
    width: "100%",
    height: 130,
    aspectRatio: 1000 / 900,
    marginTop: 60,
  },
});
