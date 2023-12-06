import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles, colorStyles } from "./styles";

interface ColorSelectorProps {
  colors: string[] | [string] | undefined;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

export function ColorSelector({ colors, color, setColor }: ColorSelectorProps) {
  const isSelected = (col: string) => {
    if (color == col) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cores</Text>
      <View style={styles.colors}>
        {colors?.map((col, index) => (
          <TouchableOpacity key={index} onPress={() => setColor(col)}>
            <View style={colorStyles(col, isSelected(col))}></View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
