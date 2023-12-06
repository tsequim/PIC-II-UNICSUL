import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    borderWidth: 10,
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 15,
    width: 145,
    height: 210,
    margin: 4,
    marginBottom: 15,
    shadowColor: "rgba(0, 0, 0, 0.6)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7.68,
    elevation: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "rgb(150,150,150)",
  },
  seeMore: {
    color: "rgb(0, 70, 220)",
    fontWeight: "500",
    padding: 10,
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1000 / 900,
  },
  prices: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  oldPrice: {
    color: THEME.COLORS.CAPTION_400,
    fontWeight: "400",
    textDecorationLine: "line-through",
    marginRight: 5,
    fontSize: 10,
  },
  price: {
    color: THEME.COLORS.DARK_GREEN,
    fontWeight: "800",
    fontSize: 14,
  },
  addButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: 3,
  },
  addIcon: {
    position: "absolute",
    left: -12,
    bottom: -25,
  },
  notification: {
    height: 90,
    justifyContent: "center",
    paddingTop: 40,
  },
  notificationTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
});
