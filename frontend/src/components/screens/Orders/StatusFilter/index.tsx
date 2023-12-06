import * as React from "react";

import { View, Text } from "react-native";
import { Switch } from "react-native-paper";

import { styles } from "./styles";
import { THEME } from "../../../../../frontend/src/theme";

interface IStatusFilterProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StatusFilter = ({ isActive, setIsActive }: IStatusFilterProps) => {
  const onToggleSwitch = () => setIsActive(!isActive);

  return (
    <View style={styles.container}>
      <Text>Apenas pendentes: </Text>
      <Text>
        <Switch
          value={isActive}
          onValueChange={onToggleSwitch}
          color={THEME.COLORS.BACKGROUND_800}
        />
      </Text>
    </View>
  );
};
