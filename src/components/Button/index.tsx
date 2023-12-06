import { TouchableOpacity, Text } from "react-native";
import { SvgUri } from "react-native-svg";

import { styles } from "./styles";

interface ButtonProps {
  title: string;
  icon?: any;
  buttonStyles: any;
  onPress?: () => void;
}

export function Button({
  title,
  icon,
  buttonStyles,
  onPress = () => {},
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.button, ...buttonStyles }}
    >
      <SvgUri
        height={20}
        width={20}
        style={styles.icon}
        fill={"#000"}
        uri={icon}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
