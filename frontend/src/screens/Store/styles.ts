import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  profileBackground: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    width: "100%",
  },

  profile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 150,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  profilePic: {
    marginTop: -50,
    margin: 5,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7.68,
    elevation: 10,
  },

  name: {
    margin: 5,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },

  category: {
    fontSize: 13,
    color: THEME.COLORS.CAPTION_500,
  },

  address: {
    fontSize: 14,
    color: THEME.COLORS.CAPTION_500,
    padding: 20,
    alignSelf: "flex-start",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },

  list: {
    marginTop: 10,
    padding: 15,
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
  },
});
