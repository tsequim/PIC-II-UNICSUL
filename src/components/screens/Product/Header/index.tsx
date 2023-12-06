import React from "react";
import { View, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import { ArrowLeftIcon } from "../../../../assets/icons/Icons";

export function ProductHeader({ navigation }: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <ArrowLeftIcon width={25} height={25} color="#000" />
      </TouchableOpacity>
    </View>
  );
}
