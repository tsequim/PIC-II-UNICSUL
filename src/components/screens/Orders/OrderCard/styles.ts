import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    justifyContent: "space-between",

    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7.68,
    elevation: 10,
  },

  orderInfos: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
  },

  orderNumber: {
    fontSize: 16,
    fontWeight: "500",
  },

  orderDate: {
    fontSize: 13,
    color: THEME.COLORS.CAPTION_500,
    paddingVertical: 2,
  },

  orderStatus: {
    marginTop: 5,
  },

  storeImage: {},

  storeName: {
    fontWeight: "400",
    fontSize: 14,
    color: THEME.COLORS.CAPTION_500,
  },
  sellerInfos: {
    display: "flex",
    alignItems: "center",
    width: "30%",
  },
});
