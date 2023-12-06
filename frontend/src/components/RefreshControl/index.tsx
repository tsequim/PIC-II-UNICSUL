import { RefreshControl } from "react-native";
import React from "react";
import { THEME } from "../../theme";

interface IRefreshControl {
  refreshing: boolean;
  onRefresh(): void | any;
  colors?: string[];
}

export default function RefreshControla({
  refreshing,
  onRefresh,
  colors = [THEME.COLORS.BACKGROUND_800],
}: IRefreshControl) {
  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
}
