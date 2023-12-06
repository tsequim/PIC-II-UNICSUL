import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  ActivityIndicator,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";

import { OrderCard } from "../../components/screens/Orders/OrderCard";
import { ListItem } from "../../components/ListItem";
import { StatusFilter } from "../../components/screens/Orders/StatusFilter";
import { addOnlyNews } from "../../utils/addOnlyNews";

import { THEME } from "../../../frontend/src/theme";
import { styles } from "./styles";

import { IOrder } from "../../../frontend/src/@types/IOrder";

import { getOrders } from "../../services/apiOrders";
import { useAuth } from "../../contexts/auth";

export function Orders({ navigation }: any) {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [pendingOnly, setPendingOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showMoreEnabled, setShowMoreEnabled] = useState(true);
  const [page, setPage] = useState(1);

  const { user } = useAuth();

  // async function loadData() {
  //   setIsLoading(true);
  //   await getOrders({
  //     buyerId: user?.id as string,
  //     page: page,
  //     pendingOnly: pendingOnly,
  //     pageSize: 10,
  //   }).then((res: any) => {
  //     if (res?.data?.length == 0) {
  //       setShowMoreEnabled(false);
  //     }
  //     if (pendingOnly) {
  //       setOrders((prev) =>
  //         addOnlyNews(prev, res?.data, "id")?.filter(
  //           (ped: any) => ped.status == "Pending"
  //         )
  //       );
  //     } else {
  //       setOrders((prev) => addOnlyNews(prev, res?.data, "id"));
  //     }
  //     setIsLoading(false);
  //   });
  // }
  async function loadData() {
    setIsLoading(true);
    const ORDERS = await AsyncStorage.getItem("@BakeBliss:orders").then(
      (item: any) => JSON.parse(item)
    );
    setOrders(ORDERS);
  }

  useEffect(() => {
    // loadData();
    loadData();
  }, [page]);

  useEffect(() => {
    setPage(1);
    setShowMoreEnabled(true);
  }, [pendingOnly]);

  const onPress = (order: IOrder) => {
    navigation.navigate(
      "Order",
      JSON.stringify({ ...order, pageTitle: "Ver pedido" })
    );
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl
          colors={[THEME.COLORS.BACKGROUND_800]}
          refreshing={isLoading}
          onRefresh={loadData}
        />
      }
    >
      {/* <StatusFilter isActive={pendingOnly} setIsActive={setPendingOnly} /> */}
      {orders?.map((order: IOrder, index: number) => (
        <ListItem key={index}>
          <OrderCard
            navigation={navigation}
            order={order}
            onPress={() => onPress(order)}
          />
        </ListItem>
      ))}
      {showMoreEnabled && (
        <TouchableOpacity
          style={styles.loadMore}
          onPress={() => setPage(page + 1)}
        >
          <Text style={styles.loadMoreText}>Carregar mais</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}
