import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { List } from "react-native-paper";
import { DeleteConfirmation } from "../DeleteConfirmation";
import { LogoutConfirmation } from "../LogOutConfirmation";

import { styles } from "./styles";

import { THEME } from "../../../../theme";

import { useAuth } from "../../../../contexts/auth";

export function ProfileOptions({ navigation }: any) {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const { user } = useAuth();

  const userData = {
    address: {
      ...user?.address,
      isEditing: true,
    },
    businessData: {
      ...user?.businessData,
      isEditing: true,
    },
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "NewUserOnboarding",
            JSON.stringify({ ...userData?.businessData, isEditing: true })
          )
        }
      >
        <List.Item
          title="Alterar Dados"
          description="Alterar informações pessoais"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate(
            "AddressOnboarding",
            JSON.stringify({ ...userData?.address, isEditing: true })
          );
        }}
      >
        <List.Item
          title="Alterar Endereço"
          description="Alterar informações de endereço"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate(
            "ChangePasswordOnboarding",
            JSON.stringify({ isEditing: true, username: user?.username })
          )
        }
      >
        <List.Item
          title="Alterar Senha"
          description="Alterar senha de acesso"
          right={(props) => <List.Icon {...props} icon="chevron-right" />}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogoutOpen(true)}>
        <List.Item
          title="Sair"
          right={(props) => <List.Icon icon="logout" />}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsDeleteOpen(true)}>
        <List.Item
          titleStyle={styles.delete}
          title="Excluir Conta"
          right={(props) => (
            <List.Icon color={THEME.COLORS.DANGER} icon="delete" />
          )}
        />
      </TouchableOpacity>

      <DeleteConfirmation isOpen={isDeleteOpen} setIsOpen={setIsDeleteOpen} />
      <LogoutConfirmation isOpen={isLogoutOpen} setIsOpen={setIsLogoutOpen} />
    </View>
  );
}
