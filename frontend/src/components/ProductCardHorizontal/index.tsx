import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { IProduct } from "../../../frontend/src/@types/IProduct";

import { limitChars } from "../../utils/limitChars";
import { formatPrice } from "../../utils/formatPrice";

import { styles as priceStyles } from "../ProductCard/styles";
import { styles } from "./styles";

interface IProductProps {
  product: IProduct;
  navigation: any;
}

export function ProductCardHorizontal({ product, navigation }: IProductProps) {
  const openScreen = () => {
    navigation.navigate("Product", JSON.stringify(product));
  };

  const productImage = product?.image;

  return (
    <TouchableOpacity
      onPress={openScreen}
      activeOpacity={0.5}
      style={styles.container}
    >
      <Image source={productImage} style={styles.image} />
      <View style={styles.productInfos}>
        <Text style={styles.productName}>
          {limitChars(product?.name as string, 35)}
        </Text>
        <Text style={styles.productStore}>by BakeBliss</Text>
        <View style={priceStyles.prices}>
          {/* {product.oldPrice && (
            <Text style={priceStyles.oldPrice}>
              R${formatPrice(product.oldPrice)}
            </Text>
          )} */}

          <Text style={priceStyles.price}>R${formatPrice(product?.value)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
