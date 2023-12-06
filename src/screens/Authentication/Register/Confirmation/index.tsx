import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LabelWithIcon } from "../../../../components/LabelWithIcon";
import { ResendTimer } from "../../../../components/ResendTimer";
import { DoubleButtons } from "../../../../components/DoubleButtons";
import { Notification } from "../../../../components/Notifications";

import { DoneTaskIcon } from "../../../../assets/icons/Icons";

import { validatePassword } from "../../../../validations/validatePassword";

import { mainStyles } from "../../mainStyles";
import { styles } from "./styles";
import { THEME } from "../../../../theme";

import { useAuth } from "../../../../contexts/auth";

import * as auth from "../../../../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function RegisterConfirmation({ navigation }: any) {
  const { user, setUser, signup } = useAuth();

  const [securityCode, setSecurityCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [passVisibility, setPassVisibility] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async () => {
    if (securityCode?.length != 6) {
      Notification("Código de confirmação deve ter 6 dígitos.", "danger", 5000);
      return;
    } else if (password != passwordConfirmation) {
      Notification("Senhas diferentes", "danger", 4000);
      return;
    } else if (!validatePassword(password)) {
      Notification(
        "Verifique as regras para a senha e tente novamente.",
        "danger",
        3500
      );
      return;
    }
    setIsLoading(true);
    signup(user?.username as string, password, securityCode);
  };

  const handleResend = async () => {
    await auth
      .getSignUpCode(user?.username as string)
      .then((res: any) => {
        Notification("Código enviado.", "success", 4000);
      })
      .catch((err) => {
        switch (err?.code) {
          case "NextResendNotReady":
            Notification("Aguarde para solicitar novamente.", "danger", 4000);
        }
      });
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={mainStyles.container}>
        <Text style={mainStyles.pageTitle}>Criar conta</Text>
        <View style={mainStyles.inputs}>
          <LabelWithIcon
            title="Confirmação de cadastro"
            icon={<DoneTaskIcon width={25} height={20} />}
          />

          <Text style={{ alignSelf: "flex-start" }}>
            Digite o código que enviamos para o e-mail:
            <Text style={{ fontWeight: "bold" }}> {user?.username}</Text>
          </Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Código de segurança"
            placeholder="000000"
            keyboardType="numeric"
            maxLength={6}
            // @ts-ignore
            error={securityCode && securityCode?.length != 6}
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={securityCode}
            onChangeText={setSecurityCode}
          />
          <ResendTimer
            hours={0}
            minutes={1}
            seconds={0}
            onResendClick={handleResend}
          />
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Senha"
            placeholder="Senha"
            // @ts-ignore
            error={password && !validatePassword(password)}
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            secureTextEntry={passVisibility}
            right={
              <TextInput.Icon
                onPress={() => setPassVisibility(!passVisibility)}
                icon={passVisibility ? "eye" : "eye-off"}
                style={{ marginTop: 8 }}
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
            // @ts-ignore
            error={passwordConfirmation && !(passwordConfirmation == password)}
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            secureTextEntry={passVisibility}
            right={
              <TextInput.Icon
                onPress={() => setPassVisibility(!passVisibility)}
                icon={passVisibility ? "eye" : "eye-off"}
                style={{ marginTop: 8 }}
              />
            }
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
          />
        </View>

        <DoubleButtons
          isLoading={isLoading}
          showPrev={true}
          button1Label="Voltar"
          button1OnPress={() => navigation.navigate("Register")}
          button2Label="Continuar"
          button2OnPress={handleConfirm}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
