import React, { useEffect } from "react";

import { ScrollView, View, Text } from "react-native";
import { Divider } from "react-native-paper";
import { SectionTitle } from "../../components/SectionTitle";
import { ListItem } from "../../components/ListItem";
import { ProductCardHorizontal } from "../../components/ProductCardHorizontal";
import { StoreCard } from "../../components/StoreCard";
import { SellerCard } from "../../components/SellerCard";
import { StatusTimeline } from "../../components/screens/Order/TimeLine";

import { Summary } from "../../components/screens/Cart/Summary";

import { formatDateToBr } from "../../utils/formatDateToBr";
import { translateStatus } from "../../utils/translateStatus";

import { IOrderResponse } from "../../@types/IOrder";
import { IProduct } from "../../@types/IProduct";

import { styles, getColorByStatus } from "./styles";
import { StatusIndicator } from "../../components/StatusIndicator";

interface IOrderPageProps {
  navigation?: any;
  route?: any;
}

interface IParsedOrder extends IOrderResponse {
  pageTitle: string;
}

export function Order({ navigation, route }: IOrderPageProps) {
  const data = route?.params;
  const parsedOrder: IParsedOrder = data ? JSON.parse(data) : null;

  const store = parsedOrder?.seller;

  useEffect(() => {
    navigation.setOptions({ title: parsedOrder.pageTitle });
  }, [parsedOrder]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.background}>
        <View style={styles.summary}>
          <View
            style={{
              ...styles.floatingOrderInfos,
              borderBottomColor: getColorByStatus(
                translateStatus(parsedOrder.status) as string
              ),
            }}
          >
            <Text style={styles.title}>
              Pedido#: {parsedOrder?.orderNumber}
            </Text>
            <Text style={styles.subTitle}>
              {formatDateToBr(new Date(parsedOrder?.createdAt))}
            </Text>
          </View>

          <View style={styles.orderInfos}>
            <StatusTimeline
              createDate={new Date(parsedOrder?.createdAt)}
              updateDate={new Date(parsedOrder?.updatedAt)}
              status={translateStatus(parsedOrder?.status)}
            />
          </View>
        </View>
      </View>

      <View style={styles.list}>
        {/* <View style={styles.section}>
          <SectionTitle
            title="Status"
            subTitle=""
            buttonOnPress={() => {}}
            buttonLabel=""
          />

          <StatusIndicator
            status={translateStatus(parsedOrder?.status) as string}
            size={15}
          />
        </View> */}

        <Divider />

        <Divider />

        <View style={styles.section}>
          <SectionTitle
            title="Itens"
            subTitle=""
            buttonOnPress={() => {}}
            buttonLabel=""
          />

          {parsedOrder?.items?.map((prod, index: number) => {
            return (
              <ListItem style={{ backgroundColor: "#" }} key={index}>
                {/* @ts-ignore */}
                <ProductCardHorizontal navigation={navigation} product={prod} />
              </ListItem>
            );
          })}

          <Summary
            isOrder={true}
            // @ts-ignore
            products={parsedOrder?.items?.map((item) => item)}
            total={true}
          />
        </View>
      </View>
    </ScrollView>
  );
}
