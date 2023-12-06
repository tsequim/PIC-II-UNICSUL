import { View, ActivityIndicator } from "react-native";

import { styles } from "./styles";
import { THEME } from "../../theme/index";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
