import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";

import { Button } from "react-native-paper";

import { styles } from "./styles";

import { THEME } from "../../theme";

interface IDoubleButtonsProps {
  button1Label: string | JSX.Element;
  button1OnPress: () => void;
  button2Label: string | JSX.Element;
  button2OnPress: () => void;
  showPrev?: boolean;
  showNext?: boolean;
  isLoading?: boolean;
}

export function DoubleButtons({
  button1Label,
  button1OnPress,
  button2Label,
  button2OnPress,
  showPrev,
  showNext = true,
  isLoading = false,
}: IDoubleButtonsProps) {
  return isLoading ? (
    <ActivityIndicator
      size="large"
      style={styles.loading}
      color={THEME.COLORS.BACKGROUND_800}
    />
  ) : (
    <View style={styles.buttons}>
      {showPrev && (
        <TouchableOpacity style={{ width: "48%", marginRight: "2%" }}>
          <Button
            style={styles.button}
            mode="outlined"
            theme={{
              colors: {
                primary: THEME.COLORS.PRIMARY_LIGHT,
              },
            }}
            onTouchEnd={button1OnPress}
          >
            {button1Label}
          </Button>
        </TouchableOpacity>
      )}
      {showNext && (
        <TouchableOpacity style={{ width: "48%", marginLeft: "2%" }}>
          <Button
            style={styles.button}
            theme={{ colors: { primary: THEME.COLORS.PRIMARY_LIGHT } }}
            mode="contained"
            onTouchEnd={button2OnPress}
          >
            {button2Label}
          </Button>
        </TouchableOpacity>
      )}
    </View>
  );
}
