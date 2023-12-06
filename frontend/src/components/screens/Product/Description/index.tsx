import React, { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";

import { AmountSelector } from "../../../AmountSelector";
import { ColorSelector } from "../../../ColorSelector";
import { Notification } from "../../../Notifications";

import { useDispatch } from "react-redux";
import { addItem } from "../../../../store/ducks/cart";
import { formatPrice } from "../../../../utils/formatPrice";

import { ChartIcon } from "../../../../assets/icons/Icons";
import { IProduct } from "../../../../../frontend/src/@types/IProduct";

import { styles } from "./styles";

interface DescriptionProps {
  product: IProduct;
  navigation: any;
}

export function Description({ product, navigation }: DescriptionProps) {
  const [amount, setAmount] = useState(1);
  // const [color, setColor] = useState(colors[0]);

  const dispatch = useDispatch();

  function addItemCart(item: any, amount: number) {
    for (let i = 0; i < amount; i++) {
      // @ts-ignore
      dispatch(addItem(item));
    }
    navigation.goBack();
    Notification("Produto adicionado ao carrinho.", "success", 2000);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollViewContent}
      >
        {/* <View style={styles.container}> */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text style={styles.name}>{product?.name}</Text>
          <Text style={styles.store}>by BakeBliss</Text>
        </View>
        <Text style={styles.description}>{product?.description}</Text>
        <View style={styles.selectors}>
          <AmountSelector amount={amount} setAmount={setAmount} />
          {/* <ColorSelector colors={colors} color={color} setColor={setColor} /> */}
        </View>
        <View style={styles.checkout}>
          <Text style={styles.price}>
            R$ {formatPrice(amount * product?.value)}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addItemCart(product, amount)}
          >
            <ChartIcon width={20} height={20} colors="#fff" />
            <Text style={{ color: "#fff", fontWeight: "500", marginLeft: 8 }}>
              Adicionar ao carrinho
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </ScrollView>
    </View>
  );
}
