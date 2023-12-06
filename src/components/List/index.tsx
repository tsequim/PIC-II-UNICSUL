import React from "react";

import { ScrollView, RefreshControl } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";

import { closeToEndAction } from "../../utils/isCloseToEnd";

interface IListProps {
  children: any;
  isLoading: boolean;
  loadData: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function List({
  children,
  isLoading,
  loadData,
  page,
  setPage,
}: IListProps) {
  const loadOnReachEnd = () => {
    if (!isLoading) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          colors={[THEME.COLORS.BACKGROUND_800]}
          refreshing={isLoading}
          onRefresh={() => loadData((prev: boolean) => !prev)}
        />
      }
      onScroll={({ nativeEvent }: any) => {
        closeToEndAction("bottom", nativeEvent, () => loadOnReachEnd());
      }}
      style={styles.container}
    >
      {children}
    </ScrollView>
  );
}
