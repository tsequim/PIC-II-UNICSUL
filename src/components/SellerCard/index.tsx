import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { ISeller } from "../../@types/ISeller";

import { limitChars } from "../../utils/limitChars";
import { formatPrice } from "../../utils/formatPrice";

import { styles as priceStyles } from "../ProductCard/styles";
import { styles } from "./styles";

interface ISellerProps {
  seller: ISeller;
  navigation: any;
}

export function SellerCard({ seller, navigation }: ISellerProps) {
  const openScreen = () => {
    navigation.navigate("Store", JSON.stringify(seller));
  };

  const address = limitChars(
    `${seller?.address?.neighborhood}, ${seller?.address?.city} - ${seller?.address?.state}`,
    45
  );

  const sellerImage = seller?.logoUrl;

  return (
    <TouchableOpacity
      onPress={openScreen}
      activeOpacity={0.5}
      style={styles.container}
    >
      <Image source={{ uri: sellerImage }} style={styles.image} />
      <View style={styles.productInfos}>
        <Text style={styles.productName}>
          {limitChars(seller?.businessData?.businessName as string, 35)}
        </Text>
        <Text textBreakStrategy="balanced" style={styles.address}>
          {address}
        </Text>
        <View style={priceStyles.prices}></View>
      </View>
    </TouchableOpacity>
  );
}
