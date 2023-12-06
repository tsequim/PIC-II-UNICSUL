import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

interface SectionTitleProps {
  title: string;
  subTitle?: string;
  buttonLabel: string;
  buttonOnPress?: () => void;
}

export function SectionTitle({
  title,
  subTitle = "",
  buttonLabel,
  buttonOnPress = () => {},
}: SectionTitleProps) {
  return (
    <View style={styles.container}>
      <View style={styles.infos}>
        <Text style={styles.title}>{title}</Text>
        {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>
      <View>
        <TouchableOpacity onPress={buttonOnPress}>
          <Text style={styles.seeMore}>{buttonLabel}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
