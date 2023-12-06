import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";

import { Avatar } from "../Avatar";

import { limitChars } from "../../utils/limitChars";

import {
  ConsupetIcon,
  SearchIcon,
  ChartIcon,
  ArrowDownIcon,
} from "../../assets/icons/Icons";

import { useAuth } from "../../contexts/auth";

import { styles } from "./styles";
import { THEME } from "../../../frontend/src/theme";

export function MainHeader(props: any) {
  const { navigation } = props;
  const length = useSelector((state: any) => state.cart.length);

  const { user } = useAuth();

  const address = `${user?.address?.neighborhood as string}, ${
    user?.address?.city
  }`;

  return (
    <View style={styles.container}>
      <View
        onTouchEnd={() => navigation.navigate("Conta")}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <Image
          source={require("../../../assets/iconpng.png")}
          style={{
            width: "20%",
            height: "auto",
            aspectRatio: 1000 / 900,
          }}
        />
        {/* <ConsupetIcon
          width={35}
          height={35}
          color={THEME.COLORS.BACKGROUND_800}
        /> */}
        {/* <Avatar
          width={40}
          char={user?.businessData?.businessName?.[0] as string}
        /> */}
        <View style={styles.location}>
          <Text style={styles.selectLabel}>
            {user?.businessData?.businessName}
          </Text>
          <Text style={styles.selectValue}>
            {limitChars(address as string, 20)}
          </Text>
          {/* <Text style={styles.selectLabel}>
            Localização <ArrowDownIcon width={10} height={10} />
          </Text> */}
          {/* <Text style={styles.selectValue}>Centro, Vitória</Text> */}
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate("Buscar")}>
          <SearchIcon width={30} height={30} marginRight={15} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <View style={styles.cartAmount}>
            <Text style={styles.cartAmountText}>{length}</Text>
          </View>
          <ChartIcon width={30} height={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
