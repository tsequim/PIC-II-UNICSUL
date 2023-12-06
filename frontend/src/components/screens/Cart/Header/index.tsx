import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

import { ArrowLeftIcon } from "../../../../assets/icons/Icons";
import { ChartIcon } from "../../../../assets/icons/Icons";

import { styles } from "./styles";

export function CartHeader({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <ArrowLeftIcon width={25} height={25} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Carrinho</Text>
      <TouchableOpacity style={styles.button}>
        <ChartIcon width={30} height={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
