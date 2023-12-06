import React from "react";
import { View, Button, Text, Pressable, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface AmountSelectorProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

export function AmountSelector({ amount, setAmount }: AmountSelectorProps) {
  return (
    <View>
      <Text style={{ fontWeight: "500", paddingBottom: 8 }}>Quantidade</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ ...styles.amountButton, ...styles.minus }}
          onPress={() => setAmount((prev) => (prev > 1 ? prev - 1 : prev))}
        >
          <Text
            style={{ fontSize: 25, lineHeight: 27, fontWeight: "300" }}
            onPress={() => setAmount((prev) => (prev > 1 ? prev - 1 : prev))}
          >
            -
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            ...styles.amountButton,
            textAlign: "center",
            lineHeight: 27,
          }}
        >
          {amount}
        </Text>
        <TouchableOpacity
          style={{ ...styles.amountButton, ...styles.plus }}
          onPress={() => setAmount((prev) => prev + 1)}
        >
          <Text
            style={{
              fontSize: 25,
              lineHeight: 27,
              fontWeight: "300",
            }}
            onPress={() => setAmount((prev) => prev + 1)}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
