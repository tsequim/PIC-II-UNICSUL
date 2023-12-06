import React, { useEffect } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { StatusIndicator } from "../../../StatusIndicator";
import { Avatar } from "react-native-paper";

import { translateStatus } from "../../../../utils/translateStatus";
import { limitChars } from "../../../../utils/limitChars";

import { styles } from "./styles";

import { IOrder } from "../../../../../frontend/src/@types/IOrder";

interface IOrderCardProps {
  navigation?: any;
  order: IOrder;
  onPress: () => void;
}

import { formatDateToBr } from "../../../../utils/formatDateToBr";

export function OrderCard({
  navigation,
  order,
  onPress = () => {},
}: IOrderCardProps) {
  const store = order?.sellerId;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.orderInfos}>
        <Text style={styles.orderNumber}>Pedido#: {order?.orderNumber}</Text>
        <Text style={styles.orderDate}>
          {formatDateToBr(new Date(order.createdAt))}
        </Text>
        <StatusIndicator
          status={translateStatus(order.status) as string}
          size={18}
        />
      </View>
      <View style={styles.sellerInfos}>
        <Avatar.Image
          style={styles.storeImage}
          size={50}
          source={{ uri: store?.logoUrl }}
        />
        <Text style={styles.storeName}>
          {/* {limitChars(store?.businessData?.businessName, 17)} */}
          {limitChars("BakeBliss", 17)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
