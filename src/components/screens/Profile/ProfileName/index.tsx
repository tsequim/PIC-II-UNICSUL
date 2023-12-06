import { View, Text } from "react-native";
import React from "react";

import { Avatar } from "../../../Avatar";

import { styles } from "./styles";

import { useAuth } from "../../../../contexts/auth";

export function ProfileName({}) {
  const { user } = useAuth();

  const name = user?.businessData?.businessName;

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Avatar char={name?.[0] as string} width={50} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}
