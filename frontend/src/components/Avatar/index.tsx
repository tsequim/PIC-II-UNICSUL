import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface AvatarProps {
  char: string;
  width: number;
}

export function Avatar({ width, char }: AvatarProps) {
  const size = { width: width, height: width, borderRadius: width };
  const fontSize = width - width * 0.3;

  return (
    <View style={{ ...styles.container, ...size }}>
      <Text style={{ fontSize }}>{char}</Text>
    </View>
  );
}
