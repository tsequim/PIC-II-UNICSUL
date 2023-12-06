import { StyleSheet, Text } from "react-native";
import { THEME } from "../../../frontend/src/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  amountButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: THEME.COLORS.CAPTION_200,
    width: 35,
    height: 30,
  },
  minus: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
  },
  plus: {
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
});
