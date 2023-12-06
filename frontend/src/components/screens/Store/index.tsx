import React from "react";

import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";

export default function index() {
  return (
    <ScrollView>
      <View style={styles.bg}>
        <Text>Teste</Text>
      </View>
    </ScrollView>
  );
}
