import React from "react";

import { View, Text } from "react-native";
import { StatusDotIcon } from "../../assets/icons/Icons";

import { styles } from "./styles";

interface IStatusIndicatorProps {
  status: string;
  size: number;
}

export function StatusIndicator({ status, size }: IStatusIndicatorProps) {
  let color = "#0043ce";

  switch (status) {
    case "Pendente":
      color = "#f1c21b";
      break;
    case "Concluído":
      color = "#24A148";
      break;
    case "Cancelado":
      color = "#da1e28";
      break;
  }

  const StatusDot = (size: number, color: string) => {
    return (
      <View style={styles.container}>
        <StatusDotIcon color={color} width={size} height={size} />
        <Text style={styles.text}>{status}</Text>
      </View>
    );
  };

  return StatusDot(size, color);
}
