import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../../../store/ducks/cart";

import { formatPrice } from "../../../../utils/formatPrice";
import { limitChars } from "../../../../utils/limitChars";

import { TrashIcon } from "../../../../assets/icons/Icons";

import { IProduct } from "../../../../../frontend/src/@types/IProduct";

import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function ProductCard(product: IProduct) {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const productAmount = useSelector(
    (state: any) =>
      state.cart.filter((prod: IProduct) => prod.id == product.id).length
  );

  const removeProduct = (product: IProduct) => {
    // @ts-ignore
    dispatch(removeItem(product.id));
  };

  const productImage = product?.image;

  const onPress = () => {
    // @ts-ignore
    navigation.navigate("Product", JSON.stringify(product));
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Image source={productImage} style={styles.image} />
        <View style={styles.productAmount}>
          <Text style={styles.productAmountText}>{productAmount}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.name}>{limitChars(product.name, 30)}</Text>
        <Text style={styles.store}>by BakeBliss</Text>
        <View
          style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
        >
          {/* <Text style={styles.oldPrice}>R${formatPrice(product.oldPrice)}</Text> */}
          <Text style={styles.price}>R${formatPrice(product.value)}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => removeProduct(product)}
        style={styles.trashIcon}
      >
        <TrashIcon width={20} height={20} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
