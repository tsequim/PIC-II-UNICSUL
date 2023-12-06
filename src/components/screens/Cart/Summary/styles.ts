import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: "#fff",
    width: "100%",
    position: "relative",
    borderRadius: 15,
  },
  section: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.CAPTION_200,
  },
  title: {
    color: THEME.COLORS.BLUE,
    fontSize: 16,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 1,
  },
  subtotal: {
    fontWeight: "500",
    fontSize: 16,
  },
  frete: {
    fontWeight: "500",
    fontSize: 16,
  },
  freteValue: {
    fontWeight: "500",
    color: THEME.COLORS.DARK_GREEN,
  },
  total: {
    fontWeight: "500",
    fontSize: 16,
    paddingVertical: 10,
  },
  totalValue: {
    fontWeight: "500",
    fontSize: 16,
  },
  parcelas: {
    fontSize: 10,
  },
  button: {
    width: "100%",
    backgroundColor: THEME.COLORS.GREEN,
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
  },
});
