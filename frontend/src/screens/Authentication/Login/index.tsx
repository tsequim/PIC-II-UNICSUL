import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { View, TouchableOpacity, Text, Image } from "react-native";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { Notification } from "../../../components/Notifications";

import { ConsupetIcon, ConsupetPinkAndBlue } from "../../../assets/icons/Icons";

import { validateEmail } from "../../../utils/emailValidator";
import { validateFields } from "../../../utils/validateFields";

import { THEME } from "../../../../frontend/src/theme";
import { mainStyles } from "../mainStyles";
import { styles } from "./styles";

import { useAuth } from "../../../contexts/auth";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export function Login({ navigation }: any) {
  const { signed, login, setUser } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passVisibility, setPassVisibility] = useState(true);
  const [fieldsError, setFieldsError] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = () => {
    setUser({
      onboardingDone: true,
      businessData: {
        businessName: "Otávio Sequim",
      },
      address: {
        neighborhood: "Bairro",
        city: "Cidade",
      },
    });

    // if (validateEmail(email) && password) {
    //   setIsLoading(true);
    //   login(email, password)
    //     .then((res: any) => {
    //       setIsLoading(false);
    //     })
    //     .catch((err) => {
    //       setIsLoading(false);
    //       Notification(err, "danger", 5000);
    //     });
    // } else {
    //   setFieldsError(true);
    //   Notification("E-mail ou Senha incorretos.", "danger", 2000);
    // }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={mainStyles.background}>
      <View style={mainStyles.container}>
        <Image
          source={require("../../../assets/icon.png")}
          style={mainStyles.logo}
        />
        <View style={styles.inputs}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="E-mail"
            error={validateFields(fieldsError, email, "email")}
            placeholder="E-mail"
            keyboardType="email-address"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.textInput}
            mode="outlined"
            label="Senha"
            error={validateFields(fieldsError, password, "password")}
            secureTextEntry={passVisibility}
            right={
              <TextInput.Icon
                onPress={() => setPassVisibility(!passVisibility)}
                icon={passVisibility ? "eye" : "eye-off"}
                style={{ marginTop: 15 }}
              />
            }
            placeholder="Senha"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("MissPassword")}
            style={{ alignSelf: "flex-end" }}
          >
            <Text style={styles.missPassword}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            style={styles.loading}
            color={THEME.COLORS.BACKGROUND_800}
          />
        ) : (
          <View style={styles.buttons}>
            <TouchableOpacity>
              <Button
                style={styles.button}
                mode="contained"
                theme={{ colors: { primary: THEME.COLORS.PRIMARY_LIGHT } }}
                onTouchEnd={handleLogin}
              >
                Entrar
              </Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
                style={styles.button}
                theme={{ colors: { primary: THEME.COLORS.PRIMARY_LIGHT } }}
                mode="outlined"
                onTouchEnd={() => navigation.navigate("Register")}
              >
                Criar conta
              </Button>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
}
