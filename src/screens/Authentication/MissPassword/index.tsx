import React, { useState, useEffect } from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { Notification } from "../../../components/Notifications";

import { validateEmail } from "../../../utils/emailValidator";
import { validateFields } from "../../../utils/validateFields";

import { THEME } from "../../../theme";
import { mainStyles } from "../mainStyles";
import { styles } from "./styles";

import { useAuth } from "../../../contexts/auth";
import * as auth from "../../../services/auth";

export function MissPassword({ navigation, route }: any) {
  const { user } = useAuth();

  const [email, setEmail] = useState("");
  const [fieldsError, setFieldsError] = useState(false);

  const data = route?.params;
  const parsedData = data ? JSON.parse(data) : null;

  useEffect(() => {
    // async function loadData() {
    //   await auth.forgotPassword(user?.username as string);
    // }
    // loadData();
  }, []);

  const handleConfirm = () => {
    if (validateEmail(email)) {
      navigation.navigate(
        "ChangePassword",
        JSON.stringify({ username: email })
      );
    } else {
      setFieldsError(true);
      Notification("E-mail incorreto ou não informado.", "danger", 2500);
    }
  };

  return (
    <View style={mainStyles.container}>
      <Text style={styles.pageTitle}>Recuperar senha</Text>
      <View style={styles.inputs}>
        <Text style={styles.title}>@ Informe seu e-mail</Text>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="E-mail"
          error={validateFields(fieldsError, email, "email")}
          placeholder="E-mail"
          activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={{ width: "50%", marginRight: 10 }}>
          <Button
            style={styles.button}
            mode="outlined"
            theme={{ colors: { primary: THEME.COLORS.PRIMARY_LIGHT } }}
            onTouchEnd={() => navigation.goBack()}
          >
            Voltar
          </Button>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: "50%", marginLeft: 10 }}>
          <Button
            style={styles.button}
            theme={{ colors: { primary: THEME.COLORS.PRIMARY_LIGHT } }}
            mode="contained"
            onTouchEnd={handleConfirm}
          >
            Continuar
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
