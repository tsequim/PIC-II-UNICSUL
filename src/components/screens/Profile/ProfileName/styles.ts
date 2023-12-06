import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    textAlign: "left",
  },
  image: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
});
