import React, { useState } from "react";
import { View, Text } from "react-native";

import { TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LabelWithIcon } from "../../../components/LabelWithIcon";
import { DoubleButtons } from "../../../components/DoubleButtons";
import { Notification } from "../../../components/Notifications";

import { MailLockIcon } from "../../../assets/icons/Icons";

import { validateEmail } from "../../../utils/emailValidator";
import { validateFields } from "../../../utils/validateFields";
import { validatePassword } from "../../../validations/validatePassword";

import { THEME } from "../../../../frontend/src/theme";
import { mainStyles } from "../mainStyles";
import { styles } from "./styles";

import { useAuth } from "../../../contexts/auth";
import { getSignUpCode } from "../../../services/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Register({ navigation }: any) {
  const { user, setUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const [fieldsError, setFieldsError] = useState(false);

  const handleConfirm = () => {
    if (validateEmail(email)) {
      setIsLoading(true);
      getSignUpCode(email)
        .then((res: any) => {
          const newUserState = {
            ...user,
            username: email,
            mailValidation: true,
          };
          AsyncStorage.setItem("@BakeBliss:user", JSON.stringify(newUserState));
          setUser(newUserState);
          navigation.navigate("RegisterConfirmation");
        })
        .catch((err) => {
          switch (err?.code) {
            case "UsernameAlreadyExists":
              Notification(
                "Este e-mail já possui um cadastro.",
                "warning",
                5000
              );
              return;
            case "NextResendNotReady":
              Notification(
                "Aguarde para solicitar um código novamente.",
                "danger",
                4000
              );
              return;
          }
        })
        .finally(() => setIsLoading(false));
    } else {
      Notification("Verifique seu e-mail antes de prosseguir.", "danger", 3500);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={mainStyles.container}>
        <Text style={mainStyles.pageTitle}>Criar conta</Text>
        <View style={mainStyles.inputs}>
          <LabelWithIcon
            title={"Informe seu E-mail"}
            icon={<MailLockIcon width={25} height={18} />}
          />
          <TextInput
            style={styles.textInput}
            scrollEnabled={true}
            mode="outlined"
            label="E-mail"
            placeholder="E-mail"
            error={validateFields(fieldsError, email, "email")}
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <DoubleButtons
          isLoading={isLoading}
          showPrev={true}
          button1Label="Voltar"
          button1OnPress={() => navigation.navigate("Login")}
          button2Label="Continuar"
          button2OnPress={handleConfirm}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
