import React from "react";

import { HelperText as HText } from "react-native-paper";

interface IHelperTextProps {
  type: "info" | "error";
  text: string;
  show: boolean;
}

export default function HelperText({
  type,
  text,
  show,
}: IHelperTextProps): any {
  return show && <HText type={type}>{text}</HText>;
}
