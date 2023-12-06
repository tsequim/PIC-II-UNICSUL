import { View, Text } from "react-native";
import React from "react";

import { styles } from "./styles";

interface LabelWithIconProps {
  icon: JSX.Element;
  title: string;
}

export function LabelWithIcon({ icon, title }: LabelWithIconProps) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.label}>{title}</Text>
    </View>
  );
}
