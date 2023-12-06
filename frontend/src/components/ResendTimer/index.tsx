import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { countdown } from "../../utils/countdown";

import { ClockIcon } from "../../assets/icons/Icons";

import { styles } from "./styles";

interface ITimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  onResendClick: () => void;
}

export function ResendTimer({
  hours,
  minutes,
  seconds,
  onResendClick,
}: ITimerProps) {
  return (
    <View style={styles.timer}>
      <ClockIcon width={20} height={20} />
      <View style={{ paddingLeft: 10 }}>
        <View>
          <Text>{countdown(hours, minutes, seconds)} minutos</Text>
        </View>
        <TouchableOpacity onPress={onResendClick}>
          <Text style={styles.link}>Enviar novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
