import React, { useEffect, useState } from "react";

import { View, ActivityIndicator, TouchableOpacity, Text } from "react-native";

import { ProductCardHorizontal } from "../../../components/ProductCardHorizontal";
import { ListItem } from "../../../components/ListItem";
import { addOnlyNews } from "../../../utils/addOnlyNews";

import { THEME } from "../../../theme";
import { styles } from "./styles";

import { IProduct } from "../../../@types/IProduct";

import { getProducts } from "../../../services/apiProducts";

import { PRODUCTS } from "../../../utils/products";

import { useNavigation } from "@react-navigation/native";

interface IProductsListProps {
  query: any;
  isLoading: boolean;
  refresh: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Products({
  query,
  refresh,
  page,
  setPage,
}: IProductsListProps): JSX.Element[] | JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [page, setPage] = useState(1);

  const [showMoreEnabled, setShowMoreEnabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  // useEffect(() => {
  //   async function loadData() {
  //     setIsLoading(true);
  //     await getProducts({
  //       ...query,
  //       page: page,
  //       pageSize: 10,
  //     }).then((res: any) => {
  //       if (res?.data?.length == 0) {
  //         setShowMoreEnabled(false);
  //       }
  //       setProducts((prev) => addOnlyNews(prev, res?.data, "id"));
  //       setIsLoading(false);
  //     });
  //   }

  //   loadData();
  // }, [page, refresh]);

  useEffect(() => {
    setShowMoreEnabled(true);
  }, [refresh]);

  return (
    <View style={styles.list}>
      {PRODUCTS?.map((product: IProduct, index: number) => (
        <ListItem key={index}>
          <ProductCardHorizontal product={product} navigation={navigation} />
        </ListItem>
      ))}
      {isLoading ? (
        <ActivityIndicator
          color={THEME.COLORS.BACKGROUND_800}
          size={"large"}
          style={styles.loading}
        />
      ) : (
        showMoreEnabled && (
          <TouchableOpacity
            style={styles.loadMore}
            onPress={() => setPage(page + 1)}
          >
            <Text style={styles.loadMoreText}>Carregar mais</Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );
}
