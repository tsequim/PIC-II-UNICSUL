import { View, Text } from "react-native";
import React from "react";

import { styles } from "./styles";

export function ListItem({ children }: any) {
  return <View style={styles.container}>{children}</View>;
}
