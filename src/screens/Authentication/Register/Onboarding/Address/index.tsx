import React, { useState, useEffect, useRef } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { LabelWithIcon } from "../../../../../components/LabelWithIcon";
import { DoubleButtons } from "../../../../../components/DoubleButtons";
import { Notification } from "../../../../../components/Notifications";

import { cepMask } from "../../../../../utils/cepMask";
import { removeNotNumbers } from "../../../../../utils/removeNotNumbers";
import { statesList } from "../../../../../utils/lists/ufAndCitysList";

import { LocationIcon } from "../../../../../assets/icons/Icons";

import { THEME } from "../../../../../theme";
import { mainStyles } from "../../../mainStyles";

import { useAuth } from "../../../../../contexts/auth";
import { updateBuyersAddress } from "../../../../../services/apiBuyers";
import { getAddressByZipCode } from "../../../../../services/getCep";

import { useNavigation } from "@react-navigation/native";

interface IAdressPageProps {
  route?: any;
}

export function Address({ route }: IAdressPageProps) {
  const { setUser } = useAuth();
  const [cep, setCep] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [addressNumber, setAddressNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [complement, setComplement] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isZipCodeLoading, setIsZipCodeLoading] = useState(false);

  const [showStateDropDown, setShowStateDropDown] = useState(false);
  const [showCityDropDown, setShowCityDropDown] = useState(false);

  const navigation = useNavigation();

  // CHECKING IF IS EDITING OR CREATING A USER
  const data = route?.params;
  const parsedData = data ? JSON.parse(data) : null;

  useEffect(() => {
    setCep(parsedData?.zipCode);
    setState(parsedData?.state);
    setCity(parsedData?.city);
    setStreet(parsedData?.street);
    setAddressNumber(parsedData?.number);
    setNeighborhood(parsedData?.neighborhood);
    setComplement(parsedData?.complement);
  }, []);

  const pageTitle = parsedData?.isEditing ? "Editar dados" : "Criar conta";
  // -----------------------------------------

  const address = {
    zipCode: removeNotNumbers(cep),
    street: street,
    number: addressNumber,
    complement: complement,
    neighborhood: neighborhood,
    city: city,
    state: state,
  };

  const handleChangeCep = async (zipCode: string) => {
    setCep(cepMask(zipCode));
    if (cepMask(zipCode)?.length == 9) {
      setIsZipCodeLoading(true);
      await getAddressByZipCode(removeNotNumbers(zipCode))
        .then((res: any) => {
          const data = res?.data;
          setState(data?.uf ?? "");
          setCity(data?.localidade ?? "");
          setNeighborhood(data?.bairro ?? "");
          setStreet(data?.logradouro ?? "");
        })
        .finally(() => setIsZipCodeLoading(false));
    }
  };

  const handleConfirm = async () => {
    const user = await AsyncStorage.getItem("@BakeBliss:user").then(
      (res: any) => JSON.parse(res)
    );

    setIsLoading(true);
    await updateBuyersAddress(user?.id as string, { address })
      .then(async (res: any) => {
        const newUserState = { ...user, address, onboardingDone: true };
        await AsyncStorage.setItem(
          "@BakeBliss:user",
          JSON.stringify(newUserState)
        );
        setUser(newUserState);
        if (!parsedData?.isEditing) {
          // @ts-ignore
          navigation.navigate("Home");
        } else if (parsedData?.isEditing) {
          Notification("Endereço editado com sucesso!", "success");
          navigation.goBack();
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScrollView style={mainStyles.scrollView}>
        <View style={mainStyles.container}>
          <Text style={mainStyles.pageTitle}>{pageTitle}</Text>
          <View style={mainStyles.inputs}>
            <LabelWithIcon
              icon={<LocationIcon width={20} height={20} />}
              title="Endereço"
            />

            <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="CEP"
              placeholder="CEP"
              keyboardType="numeric"
              maxLength={8 + 1}
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={cep}
              onChangeText={handleChangeCep}
            />
            <ActivityIndicator
              size="small"
              animating={isZipCodeLoading}
              style={mainStyles.cepLoading}
              color={THEME.COLORS.BACKGROUND_800}
            />
            {/* <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="Estado"
              maxLength={2}
              placeholder="Estado"
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={state}
              onChangeText={setState}
            /> */}
            <View style={{ marginTop: 15 }}>
              <DropDown
                label={"Estado"}
                dropDownStyle={{ marginTop: 60 }}
                mode={"outlined"}
                visible={showStateDropDown}
                showDropDown={() => setShowStateDropDown(true)}
                onDismiss={() => setShowStateDropDown(false)}
                value={state}
                setValue={setState}
                inputProps={{
                  right: <TextInput.Icon icon={"menu-down"} size={25} />,
                }}
                list={statesList}
              />
            </View>
            <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="Cidade"
              placeholder="Cidade"
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={city}
              onChangeText={setCity}
            />
            <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="Bairro"
              placeholder="Bairro"
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={neighborhood}
              onChangeText={setNeighborhood}
            />
            <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="Rua"
              placeholder="Rua"
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={street}
              onChangeText={setStreet}
            />
            <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="Número"
              keyboardType="numeric"
              placeholder="Número"
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={addressNumber}
              onChangeText={setAddressNumber}
            />
            <TextInput
              style={mainStyles.textInput}
              mode="outlined"
              label="Complemento"
              placeholder="Complemento"
              activeOutlineColor={THEME.COLORS.PRIMARY_LIGHT}
              value={complement}
              onChangeText={setComplement}
            />
            {/* <View style={{ marginTop: 15 }}>
              <DropDown
                label={"Cidade"}
                dropDownStyle={{ marginTop: 60 }}
                mode={"outlined"}
                visible={showCityDropDown}
                showDropDown={() => setShowCityDropDown(true)}
                onDismiss={() => setShowCityDropDown(false)}
                value={city}
                setValue={setCity}
                inputProps={{
                  right: <TextInput.Icon icon={"menu-down"} size={25} />,
                }}
                list={state ? (citysList(state) as any) : []}
              />
            </View> */}
          </View>
          <View style={{ marginTop: 20 }}>
            <DoubleButtons
              isLoading={isLoading}
              showPrev={!parsedData?.isEditing ? false : true}
              button1Label="Voltar"
              button1OnPress={() => navigation.goBack()}
              button2Label="Confirmar"
              button2OnPress={handleConfirm}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
}
