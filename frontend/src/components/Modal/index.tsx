import { Modal as NativeModal } from "react-native";
import React from "react";

interface IModalProps {
  isOpen: boolean;
  content: JSX.Element;
}

export function Modal({ isOpen, content }: IModalProps) {
  return (
    <NativeModal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      statusBarTranslucent
    >
      {content}
    </NativeModal>
  );
}
