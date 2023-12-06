import React, { useState } from "react";

import { View, Text, TouchableOpacity } from "react-native";

import { OrderConfirmationModal } from "../OrderConfirmationModal";

import { formatPrice } from "../../../../utils/formatPrice";

import { IProduct } from "../../../../@types/IProduct";

import { styles } from "./styles";
import { calcTotalValue } from "../../../../utils/calcTotalValue";

interface SummaryProps {
  isOrder?: boolean;
  products: IProduct[];
  total: boolean;
}

export function Summary({ isOrder, products, total }: SummaryProps) {
  const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);

  const totalValue = calcTotalValue(products, "value");

  const totalSummaryStyles = total
    ? { shadowColor: "rgba(0, 0, 0, 0.7)", elevation: 35 }
    : {};

  const title = "Resumo do pedido";

  return (
    <View
      style={
        isOrder
          ? { ...styles.container }
          : { ...styles.container, ...totalSummaryStyles }
      }
    >
      <View style={styles.section}>
        {!isOrder && <Text style={styles.title}>{title}</Text>}
      </View>
      {!total && (
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.subtotal}>Subtotal</Text>
            <Text style={styles.subtotal}>R$ {formatPrice(totalValue)}</Text>
          </View>
        </View>
      )}
      <View>
        {total && (
          <View style={styles.row}>
            <Text style={styles.total}>Total</Text>
            <View style={{ alignItems: "center", paddingVertical: 12 }}>
              <Text style={styles.totalValue}>
                R$ {formatPrice(totalValue)}
              </Text>
              {/* <Text style={styles.parcelas}>
              Até 5x de R$ {formatPrice(totalValue / 5)}
            </Text> */}
            </View>
          </View>
        )}
      </View>
      {!total && (
        <TouchableOpacity
          style={{ ...styles.button }}
          disabled={false}
          onPress={() => setIsOrderConfirmationOpen(true)}
        >
          <Text style={styles.buttonText}>Fazer pedido</Text>
        </TouchableOpacity>
      )}
      <OrderConfirmationModal
        data={products}
        isOpen={isOrderConfirmationOpen}
        setIsOpen={setIsOrderConfirmationOpen}
      />
    </View>
  );
}
