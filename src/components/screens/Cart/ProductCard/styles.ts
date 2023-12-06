import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 8,

    // shadowColor: "rgba(0, 0, 0, 0.7)",
    // elevation: 35,
  },
  image: {
    borderRadius: 10,
    width: 75,
    height: 75,
    marginRight: 10,
  },
  productAmount: {
    position: "absolute",
    bottom: 0,
    right: 5,
    backgroundColor: THEME.COLORS.PINK,
    width: 16,
    height: 16,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  productAmountText: {
    color: "white",
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "500",
  },
  name: {
    fontWeight: "500",
  },
  store: {
    color: THEME.COLORS.CAPTION_500,
    fontSize: 13,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: THEME.COLORS.CAPTION_500,
    marginRight: 5,
  },
  price: {
    color: THEME.COLORS.DARK_GREEN,
    fontWeight: "900",
    fontSize: 16,
  },
  trashIcon: {
    position: "absolute",
    right: 22,
  },
});
