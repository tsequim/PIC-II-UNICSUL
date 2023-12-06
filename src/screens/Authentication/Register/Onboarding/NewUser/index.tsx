import React, { useState, useEffect } from "react";

import { View, Text, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";

import { LabelWithIcon } from "../../../../../components/LabelWithIcon";
import { DoubleButtons } from "../../../../../components/DoubleButtons";
import { Notification } from "../../../../../components/Notifications";
import HelperText from "../../../../../components/HelperText";

import { RegisterIcon } from "../../../../../assets/icons/Icons";

import { cnpjMask } from "../../../../../utils/cnpjMask";
import { phoneNumberMask } from "../../../../../utils/phoneNumberMask";
import { validateBusinessData } from "../../../../../validations/validateBusinessData";
import { removeNotNumbers } from "../../../../../utils/removeNotNumbers";
import { validCNPJ } from "../../../../../utils/checkCnpjValidity";

import { mainStyles } from "../../../mainStyles";

import { THEME } from "../../../../../theme";

import { apiConfig } from "../../../../../services/apiConfig";
import * as auth from "../../../../../services/auth";
import { updateBuyersData } from "../../../../../services/apiBuyers";

import { useAuth } from "../../../../../contexts/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface INewUserPageProps {
  navigation?: any;
  route?: any;
}

export function NewUser({ navigation, route }: INewUserPageProps) {
  const { setUser } = useAuth();

  const [businessName, setBusinessName] = useState("");
  const [tradingName, setTradingName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  // CHECKING IF IS EDITING OR CREATING A USER
  const data = route?.params;
  const parsedData = data ? JSON.parse(data) : null;

  useEffect(() => {
    setBusinessName(parsedData?.businessName);
    setTradingName(parsedData?.tradingName);
    setCnpj(cnpjMask(parsedData?.document));
    setPhoneNumber(phoneNumberMask(parsedData?.contactPhone));
    setContactEmail(parsedData?.contactEmail);
  }, []);

  const pageTitle = parsedData?.isEditing ? "Editar dados" : "Criar conta";
  // -----------------------------------------

  const businessData = {
    document: removeNotNumbers(cnpj),
    businessName: businessName,
    tradingName: tradingName,
    contactEmail: contactEmail,
    contactPhone: `${removeNotNumbers(phoneNumber)}`,
  };

  const catchErrors = (err: any) => {
    if (err?.errors?.["BusinessData.Document"]) {
      Notification("Cnpj inválido", "danger", 4000);
    }
  };

  const handleConfirm = async () => {
    const user = await AsyncStorage.getItem("@BakeBliss:user").then(
      (res: any) => JSON.parse(res)
    );

    if (!handleCheckCnpj()) return;

    setIsLoading(true);
    if (parsedData?.isEditing) {
      await updateBuyersData(user?.id as string, { businessData })
        .then(async (res) => {
          Notification("Dados alterados com sucesso.", "success", 2500);
          const newUserState = { ...user, businessData: businessData };
          await AsyncStorage.setItem(
            "@BakeBliss:user",
            JSON.stringify(newUserState)
          );
          setUser(newUserState);
          setIsLoading(false);
        })
        .catch((err) => catchErrors(err))
        .finally(() => navigation.goBack());
    } else {
      if (
        validateBusinessData(
          cnpj,
          businessName,
          tradingName,
          contactEmail,
          phoneNumber
        )
      ) {
        await auth
          .login(user?.username as string, user?.password as string)
          .then(async (res: any) => {
            const { data } = res;
            AsyncStorage.setItem("@BakeBliss:token", data?.accessToken);
            AsyncStorage.setItem("@BakeBliss:refreshToken", data?.refreshToken);

            apiConfig.defaults.headers[
              "Authorization"
            ] = `Bearer ${data?.accessToken}`;

            await auth
              .getUserId(user?.username as string)
              .then(async (res: any) => {
                const { data } = res;
                const id = data;

                await updateBuyersData(id, { businessData })
                  .then(async (res: any) => {
                    const newUserData2 = { ...user, businessData, id: id };
                    await AsyncStorage.setItem(
                      "@BakeBliss:user",
                      JSON.stringify(newUserData2)
                    );
                    setUser(newUserData2);
                    navigation.navigate("Address");
                  })
                  .catch((err) => catchErrors(err));
              });
          })
          .finally(() => setIsLoading(false));
      } else {
        setIsLoading(false);
      }
    }
  };

  const handleCheckCnpj = () => {
    if (!validCNPJ(cnpj)) {
      Notification("CNPJ Inválido.", "danger", 4000);
    }
    return validCNPJ(cnpj);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={mainStyles.container}>
        <Text style={mainStyles.pageTitle}>{pageTitle}</Text>
        <View style={mainStyles.inputs}>
          <LabelWithIcon
            icon={<RegisterIcon width={25} height={20} />}
            title="Dados pessoais"
          />

          <TextInput
            style={mainStyles.textInput}
            mode="outlined"
            label="Nome Fantasia"
            placeholder="Nome Fantasia"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={businessName}
            onChangeText={setBusinessName}
          />
          {/* <TextInput
            style={mainStyles.textInput}
            mode="outlined"
            label="Razão Social"
            placeholder="Razão Social"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={tradingName}
            onChangeText={setTradingName}
          /> */}
          {/* <TextInput
            style={mainStyles.textInput}
            mode="outlined"
            disabled={parsedData?.isEditing}
            label="CPF"
            placeholder="CPF"
            keyboardType="numeric"
            onBlur={handleCheckCnpj}
            maxLength={14 + 4}
            error={(Boolean(cnpj) && cnpj.length < 14 + 4) || !validCNPJ(cnpj)}
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={cnpj}
            onChangeText={(val: string) => setCnpj(cnpjMask(val))}
          /> */}
          <HelperText
            text={"CNPJ deve ter 14 números"}
            type="error"
            show={Boolean(cnpj) && cnpj.length < 14 + 4}
          />
          <TextInput
            style={mainStyles.textInput}
            mode="outlined"
            label="Telefone de contato"
            keyboardType="numeric"
            maxLength={11 + 4}
            placeholder="Telefone de contato"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={phoneNumber}
            onChangeText={(val) => setPhoneNumber(phoneNumberMask(val))}
          />
          <TextInput
            style={mainStyles.textInput}
            mode="outlined"
            label="E-mail de contato"
            keyboardType="email-address"
            placeholder="E-mail de contato"
            activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
            value={contactEmail}
            onChangeText={setContactEmail}
          />
        </View>
        <DoubleButtons
          button1Label="Voltar"
          showPrev={parsedData?.isEditing}
          isLoading={isLoading}
          button1OnPress={() => navigation.goBack()}
          button2Label={parsedData?.isEditing ? "Confirmar" : "Continuar"}
          button2OnPress={handleConfirm}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}
