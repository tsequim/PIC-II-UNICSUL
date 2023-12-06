import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    padding: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  scrollViewContent: {
    display: "flex",
    alignItems: "flex-start",
    flexGrow: 1,

    // padding: 20,
    justifyContent: "space-between",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  name: {
    fontWeight: "700",
    fontSize: 22,
    width: "70%",
  },
  store: {
    fontWeight: "500",
    fontSize: 14,
    width: "30%",
    color: THEME.COLORS.CAPTION_500,
  },
  description: {
    paddingVertical: 10,
    width: "100%",
  },
  selectors: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
  },
  checkout: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "92%",
  },
  price: {
    fontSize: 22,
    fontWeight: "700",
  },
  button: {
    backgroundColor: THEME.COLORS.GREEN,
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  notification: {
    height: 80,
    justifyContent: "center",
    paddingTop: 40,
  },
  notificationTitle: {
    fontWeight: "500",
    fontSize: 16,
  },
});
