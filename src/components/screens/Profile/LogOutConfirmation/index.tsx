import React from "react";

import { View, Text } from "react-native";

import { Modal } from "../../../Modal";
import { DoubleButtons } from "../../../DoubleButtons";

import { styles } from "./styles";

import { useAuth } from "../../../../contexts/auth";

interface ILogoutConfirmationProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LogoutConfirmation({
  isOpen,
  setIsOpen,
}: ILogoutConfirmationProps) {
  const { logout } = useAuth();

  const onConfirm = async () => {
    logout();
  };

  return (
    <Modal
      isOpen={isOpen}
      content={
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{ ...styles.modalText, fontWeight: "600", fontSize: 18 }}
            >
              Tem certeza que deseja sair?
            </Text>
            <Text style={styles.descriptionText}>
              Seu perfil será desconectado.
            </Text>

            <DoubleButtons
              showPrev={true}
              button1Label="Cancelar"
              button1OnPress={() => setIsOpen(false)}
              button2Label="Confirmar"
              button2OnPress={() => onConfirm()}
            />
          </View>
        </View>
      }
    />
  );
}
