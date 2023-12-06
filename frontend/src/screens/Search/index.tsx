import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import { Searchbar } from "react-native-paper";

import { SearchIcon } from "../../assets/icons/Icons";
import { closeToEndAction } from "../../utils/isCloseToEnd";

import { ProductCardHorizontal } from "../../components/ProductCardHorizontal";

import { styles } from "./styles";

import { IProduct } from "../../../frontend/src/@types/IProduct";
import { getProducts } from "../../services/apiProducts";
import { PRODUCTS } from "../../utils/products";

export function Search({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<IProduct[]>([]);
  const [page, setPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setProducts(PRODUCTS.filter((prod) => prod.name.includes(searchQuery)));
  }, [searchQuery, page]);

  const onChangeSearch = (el: string) => {
    setPage(1);
    setSearchQuery(el);
  };

  const loadOnReachEnd = () => {
    if (!isLoading) {
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Searchbar
          placeholder="Buscar"
          onChangeText={onChangeSearch}
          mode="bar"
          icon={() => <SearchIcon width={20} height={20} />}
          style={styles.searchInput}
          value={searchQuery}
        />
        <Text style={styles.searchFor}>Você procura por:</Text>
        <FlatList
          style={styles.flatList}
          onScroll={({ nativeEvent }: any) => {
            closeToEndAction("bottom", nativeEvent, () => loadOnReachEnd());
          }}
          data={products}
          keyExtractor={(item: IProduct) => item.id}
          renderItem={({ item }) => (
            <ProductCardHorizontal product={item} navigation={navigation} />
          )}
          showsHorizontalScrollIndicator={false}
          // contentContainerStyle={styles.contentsList}
        />
      </View>
    </SafeAreaView>
  );
}
