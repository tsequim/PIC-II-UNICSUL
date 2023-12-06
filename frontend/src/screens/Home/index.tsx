import { useEffect, useState, useCallback, useRef } from "react";
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";

import { styles } from "./styles";
import { CategorySelector } from "../../components/CategorySelector";
import { Products } from "../../components/Products";
import { Stores } from "../../components/Stores";
import Slider from "../../components/screens/Home/Slider";
// import RefreshControl from "../../components/RefreshControl";

import { getCategories } from "../../services/apiCategories";
import { getProducts } from "../../services/apiProducts";
import { getSellers } from "../../services/apiSellers";
import { getBanners } from "../../services/apiBanners";

import { IBanner } from "../../../frontend/src/@types/banners";
import { Loading } from "../../components/Loading";
import { THEME } from "../../../frontend/src/theme";

import { PRODUCTS } from "../../utils/products";
import { STORES } from "../../utils/stores";

export function Home({ navigation }: any) {
  const [isLoading, setIsLoading] = useState(false);

  // const [banners, setBanners] = useState<IBanner[]>([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [banners, setBanners] = useState([
    require("../../assets/icon.png"),
    require("../../assets/cupcakes-banner.jpg"),
  ]);

  async function loadData() {
    setIsLoading(true);
    await getCategories()
      .then((res: any) => {
        setCategories(res?.data);
      })
      .catch(console.error);
    await getProducts({ page: 1, pageSize: 3 })
      .then((res: any) => {
        setProducts(res?.data);
      })
      .catch(console.error);
    await getBanners().then((res: any) => {
      setBanners(res?.data);
    });
  }

  useEffect(() => {
    // loadData();
  }, []);

  useEffect(() => {
    if (banners?.length > 0 && categories?.length > 0 && products?.length > 0) {
      setIsLoading(false);
    }
  }, [banners, categories, products]);

  useEffect(() => {
    navigation.addListener("beforeRemove", (e: any) => {
      e.preventDefault();
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[THEME.COLORS.BACKGROUND_800]}
            refreshing={isLoading}
            onRefresh={loadData}
          />
        }
      >
        <View style={styles.container}>
          <Slider data={banners} />
          {/* @ts-ignore */}
          <Products navigation={navigation} data={PRODUCTS} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
