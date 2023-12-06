import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

import { StoreCard } from "../../../components/StoreCard";
import { addOnlyNews } from "../../../utils/addOnlyNews";

import { ISeller } from "../../../@types/ISeller";

import { styles } from "./styles";

import { getSellers } from "../../../services/apiSellers";
import { THEME } from "../../../theme";

import { useNavigation } from "@react-navigation/native";

interface ISellers {
  refresh: boolean;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Sellers({
  refresh,
  // isLoading,
  // setIsLoading,
  page,
  setPage,
}: ISellers): JSX.Element[] | JSX.Element {
  const [sellers, setSellers] = useState<ISeller[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [page, setPage] = useState(1);

  const [showMoreEnabled, setShowMoreEnabled] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      await getSellers({
        page: page,
        pageSize: 10,
      }).then((res: any) => {
        if (res?.data?.length == 0) {
          setShowMoreEnabled(false);
        }
        setSellers((prev) => addOnlyNews(prev, res?.data, "id"));
        setIsLoading(false);
      });
    }

    loadData();
  }, [page, refresh]);

  useEffect(() => {
    setShowMoreEnabled(true);
  }, [refresh]);

  const onPress = (seller: ISeller) => {
    // @ts-ignore
    navigation.navigate("Store", JSON.stringify(seller));
  };

  return (
    <View style={styles.list}>
      {sellers?.map((seller: ISeller, index: number) => (
        <View
          style={styles.container}
          key={index}
          onTouchEnd={() => onPress(seller)}
        >
          <StoreCard data={seller} onPress={() => onPress(seller)} />
        </View>
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
