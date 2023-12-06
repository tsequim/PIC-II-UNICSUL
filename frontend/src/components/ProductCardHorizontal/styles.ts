import { StyleSheet } from "react-native";
import { THEME } from "../../../frontend/src/theme";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 80,
    textAlign: "left",
    // borderWidth: 1,
  },
  image: {
    width: 50,
    borderRadius: 50,
    height: undefined,
    aspectRatio: 1,
  },
  productInfos: {
    marginLeft: 15,
    display: "flex",
    flexDirection: "column",
  },
  productName: {
    fontWeight: "500",
    fontSize: 15,
  },
  productStore: {
    fontWeight: "500",
    color: THEME.COLORS.CAPTION_400,
  },
  infos: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
    color: THEME.COLORS.BLUE,
    fontWeight: "500",
    padding: 10,
  },
});
