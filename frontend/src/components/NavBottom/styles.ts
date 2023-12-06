import { StyleSheet } from "react-native";
import { THEME } from "../../theme/index";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 70,
    elevation: 2,
    backgroundColor: "#ddd",
    shadowColor: "black",
    position: "absolute",
    bottom: 0,
  },
});
