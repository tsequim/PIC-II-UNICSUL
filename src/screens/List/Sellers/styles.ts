import { StyleSheet } from "react-native";
import { THEME } from "../../../theme";

export const styles = StyleSheet.create({
  list: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  container: {
    marginVertical: 4,
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
    color: THEME.COLORS.BACKGROUND_800,
    textAlign: "center",
    fontWeight: "500",
  },
});
