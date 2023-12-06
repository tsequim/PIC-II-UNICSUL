import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme";

export const getColorByStatus = (status: string) => {
  switch (status) {
    case "Pendente":
      return THEME.COLORS.CAUTION;
    case "Concluído":
      return THEME.COLORS.SUCCESS;
    case "Cancelado":
      return THEME.COLORS.DANGER;
    default:
      THEME.COLORS.BLUE;
  }
};

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },

  background: {
    backgroundColor: THEME.COLORS.BACKGROUND_800,
    width: "100%",
  },

  summary: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 100,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  floatingOrderInfos: {
    marginTop: -50,
    margin: 5,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "90%",
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.05,
    shadowRadius: 7.68,
    elevation: 10,
    borderBottomWidth: 3,
  },

  orderInfos: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "column",
  },
  orderInfo: {
    paddingVertical: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  orderInfoText: {
    fontSize: 14,
    color: THEME.COLORS.CAPTION_500,
    marginLeft: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 5,
  },

  name: {
    margin: 5,
    fontSize: 20,
    fontWeight: "500",
  },

  subTitle: {
    fontSize: 13,
    color: THEME.COLORS.CAPTION_500,
  },

  list: {
    marginTop: 10,
    padding: 15,
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
  },
  section: {
    paddingBottom: 25,
  },
});
