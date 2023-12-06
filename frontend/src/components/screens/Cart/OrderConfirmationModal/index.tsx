import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

import { Modal } from "../../../Modal";
import { DoubleButtons } from "../../../DoubleButtons";
import { calcTotalValue } from "../../../../utils/calcTotalValue";

import { styles } from "./styles";

import { IProduct } from "../../../../../frontend/src/@types/IProduct";

import { useAuth } from "../../../../contexts/auth";
import { sendOrder } from "../../../../services/apiOrders";
import { getDistinctObjects } from "../../../../utils/getDistinctObjects";
import { Notification } from "../../../Notifications";

import { useDispatch } from "react-redux";
import { removeItem } from "../../../../store/ducks/cart";
import { addOrder } from "../../../../store/ducks/orders";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IOrderConfirmationModalProps {
  data: IProduct[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function OrderConfirmationModal({
  data,
  isOpen,
  setIsOpen,
}: IOrderConfirmationModalProps) {
  const { user } = useAuth();

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const totalValue = calcTotalValue(data, "value");
  const items: IProduct[] = getDistinctObjects(data, "id");

  const handleConfirm = async () => {
    dispatch(
      // @ts-ignore
      addOrder({
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        orderNumber: new Date().getTime().toString().slice(-5),
        id: new Date().getTime().toString().slice(-5),
        status: "Pending",
        buyerId: user?.id as string,
        sellerId: data[0]?.id,
        totalValue: totalValue,
        items: items,
      })
    );
    Notification("Pedido enviado com sucesso!", "success", 3000);
    setIsOpen(false);
    // @ts-ignore
    navigation.navigate("Home");
    // setIsLoading(true);
    // await sendOrder({
    //   buyerId: user?.id as string,
    //   sellerId: data[0]?.id,
    //   totalValue: totalValue,
    //   items: items?.map((prod) => ({
    //     productId: prod.id,
    //     count: data?.filter((product) => product.id == prod.id)?.length,
    //   })),
    // }).then((res: any) => {
    //   Notification("Pedido enviado com sucesso!", "success", 3000);
    //   setIsLoading(false);
    //   setIsOpen(false);

    //   data?.map((prod: any) => dispatch(removeItem(prod.id)));
    // });
    data?.map((prod: any) => dispatch(removeItem(prod.id)));
  };

  return (
    <Modal
      isOpen={isOpen}
      content={
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text
              style={{ ...styles.modalText, fontWeight: "600", fontSize: 18 }}
            >
              Deseja prosseguir com o pedido?
            </Text>
            <Text style={styles.descriptionText}>
              O pedido será enviado e preparado.
            </Text>

            <DoubleButtons
              showPrev={true}
              isLoading={isLoading}
              button1Label="Cancelar"
              button1OnPress={() => setIsOpen(false)}
              button2Label="Confirmar"
              button2OnPress={handleConfirm}
            />
          </View>
        </View>
      }
    />
  );
}
