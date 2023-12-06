import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    maxWidth: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,

    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7.68,
    elevation: 10,
  },
  imageContainer: {
    width: "20%",
    borderRadius: 60,
    margin: 10,

    shadowColor: "rgba(0, 0, 0, 0.4)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7.68,
    elevation: 10,
  },
  image: {
    borderRadius: 60,
    width: 60,
    height: 60,
  },
  storeDescription: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    alignItems: "flex-start",
    width: "75%",
  },
  name: {
    fontWeight: "700",
    fontSize: 16,
  },
  address: {
    fontSize: 12,
  },
  freightRate: {
    color: THEME.COLORS.GREEN,
    fontSize: 10,
  },
  category: {
    fontSize: 9,
    padding: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: THEME.COLORS.CAPTION_300,
  },
});
