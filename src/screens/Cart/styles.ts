import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
    height: "100%",
  },
  scrollView: {
    width: "100%",
    position: "relative",
    backgroundColor: "#fff",
  },
  cartAmount: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "left",
    width: "100%",
    padding: 20,
  },
  productsList: {
    flexDirection: "column",
    width: "100%",
    paddingHorizontal: 12,
    paddingBottom: 10,
    height: "100%",
  },
});
