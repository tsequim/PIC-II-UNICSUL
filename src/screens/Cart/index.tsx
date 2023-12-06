import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";

import { useSelector } from "react-redux";
import { IProduct } from "../../@types/IProduct";

import { Summary } from "../../components/screens/Cart/Summary";
import { GroupedProductsBySeller } from "../../components/screens/Cart/GroupedProductsBySeller";

import { styles } from "./styles";

export function Cart({ navigation }: any) {
  const length = useSelector((state: any) => state.cart.length);
  const products: IProduct[] = useSelector((state: any) => state.cart);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.cartAmount}>{length} itens</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.productsList}>
            <GroupedProductsBySeller products={products} />
          </View>
        </ScrollView>
        <Summary total={true} products={products} />
      </View>
    </SafeAreaView>
  );
}
