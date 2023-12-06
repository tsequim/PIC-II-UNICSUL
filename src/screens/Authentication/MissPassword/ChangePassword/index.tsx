import React, { useState, useEffect } from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Notification } from "../../../../components/Notifications";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { DoubleButtons } from "../../../../components/DoubleButtons";

import { LockIcon, ClockIcon } from "../../../../assets/icons/Icons";

import { countdown } from "../../../../utils/countdown";
import { validatePassword } from "../../../../validations/validatePassword";

import { THEME } from "../../../../theme";
import { styles } from "./styles";
import { mainStyles } from "../../mainStyles";

import { useAuth } from "../../../../contexts/auth";
import * as auth from "../../../../services/auth";

export function ChangePassword({ navigation, route }: any) {
  const { user } = useAuth();

  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [passVisibility, setPassVisibility] = useState(true);

  const data = route?.params;
  const parsedData = data ? JSON.parse(data) : null;

  useEffect(() => {
    async function loadData() {
      await auth.forgotPassword(parsedData?.username as string);
    }
    loadData();
  }, []);

  const handleConfirm = async () => {
    if (!validatePassword(password)) {
      Notification("Senha não cumpre os requisitos.", "danger", 5000);
      return;
    }
    if (securityCode) {
      if (password == passwordConfirmation) {
        setIsLoading(true);
        await auth
          .confirmNewPassword(parsedData?.username, {
            code: securityCode,
            newPassword: password,
          })
          .then((res) => {
            if (parsedData?.isEditing) {
              navigation.goBack();
            } else {
              Notification("Senha alterada com sucesso", "success", 2000);
              navigation.navigate("Login");
            }
          })
          .catch((err) => {
            Notification("Código de segurança incorreto.", "danger");
          })
          ?.finally(() => setIsLoading(false));
      } else {
        Notification("Senhas diferentes.", "danger", 2000);
      }
    } else {
      Notification("Código de segurança não inserido", "danger");
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={mainStyles.container}>
        <View></View>
        <View style={styles.inputs}>
          <View style={styles.title}>
            <LockIcon width={25} height={25} />
            <Text style={{ fontSize: 18, marginLeft: 5 }}>Senha de acesso</Text>
          </View>

          <Text style={{ alignSelf: "flex-start" }}>
            Digite o código que enviamos para o e-mail:{" "}
            <Text style={{ fontWeight: "bold" }}>{parsedData?.username}</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Código de segurança"
            keyboardType="numeric"
            maxLength={6}
            placeholder="000000"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={securityCode}
            onChangeText={setSecurityCode}
          />

          <View style={styles.timer}>
            <ClockIcon width={20} height={20} />
            <View style={{ paddingLeft: 10 }}>
              <View>
                <Text>{countdown(0, 1, 0)} minutos</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.link}>Enviar novamente</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Senha"
            placeholder="Senha"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            secureTextEntry={passVisibility}
            right={
              <TextInput.Icon
                onPress={() => setPassVisibility(!passVisibility)}
                icon={passVisibility ? "eye" : "eye-off"}
                style={{ marginTop: 10 }}
              />
            }
            value={password}
            onChangeText={setPassword}
          />

          <Text style={{ textAlign: "left", paddingTop: 10 }}>
            {`Sua senha deve conter: \n - Pelo menos oito caracteres \n - Pelo menos uma letra minúscula \n - Pelo menos uma letra maiúscula \n - Pelo menos um número \n - Pelo menos um caractere especial (ex.: @, _, &...)`}
          </Text>

          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Confirmar senha"
            placeholder="Confirmar senha"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            secureTextEntry={passVisibility}
            right={
              <TextInput.Icon
                onPress={() => setPassVisibility(!passVisibility)}
                icon={passVisibility ? "eye" : "eye-off"}
                style={{ marginTop: 10 }}
              />
            }
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
          />
        </View>
        <DoubleButtons
          showPrev={true}
          isLoading={isLoading}
          button1Label="Voltar"
          button1OnPress={() => navigation?.goBack()}
          button2Label="Confirmar"
          button2OnPress={handleConfirm}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
