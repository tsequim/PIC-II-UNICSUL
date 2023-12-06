import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
  },
  loading: {
    padding: 15,
  },
  loadMore: {
    padding: 20,
    textAlign: "center",
    width: "100%",
  },
  loadMoreText: {
    color: THEME.COLORS.PRIMARY,
    textAlign: "center",
    fontWeight: "500",
  },
});
