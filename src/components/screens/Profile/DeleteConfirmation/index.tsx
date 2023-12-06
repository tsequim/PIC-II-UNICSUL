import React, { useState } from "react";

import { View, Text } from "react-native";

import { Modal } from "../../../Modal";
import { DoubleButtons } from "../../../DoubleButtons";

import { styles } from "./styles";

import { useAuth } from "../../../../contexts/auth";
import { deleteUser } from "../../../../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { Notification } from "../../../Notifications";

interface IDeleteConfirmationProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DeleteConfirmation({
  isOpen,
  setIsOpen,
}: IDeleteConfirmationProps) {
  const { user, setUser } = useAuth();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const onConfirm = async () => {
    setIsLoading(true);
    await deleteUser(user?.username as string)
      ?.then(async (res: any) => {
        console.log();
        await AsyncStorage.clear();
        setUser(null);
        // @ts-ignore
        navigation.navigate("Login");
      })
      .catch((err) => {
        switch (err?.code) {
          case "UserWithPendingOrders":
            Notification(
              "Não é possível deletar usuário, pois há pedidos pendentes.",
              "danger",
              5000
              // {}
            );
        }
      })
      .finally(() => {
        setIsLoading(false);
        setIsOpen(false);
      });
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
              Tem certeza que deseja excluir sua conta?
            </Text>
            <Text style={styles.descriptionText}>
              Todos os seus dados serão deletados
            </Text>

            <DoubleButtons
              isLoading={isLoading}
              showPrev={true}
              button1Label="Cancelar"
              button1OnPress={() => setIsOpen(false)}
              button2Label="Confirmar"
              button2OnPress={onConfirm}
            />
          </View>
        </View>
      }
    />
  );
}
