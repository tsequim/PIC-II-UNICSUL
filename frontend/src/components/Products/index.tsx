import { View, FlatList } from "react-native";

import { SectionTitle } from "../SectionTitle";
import { ProductCard } from "../ProductCard";

import { IProduct } from "../../../frontend/src/@types/IProduct";

import { styles } from "./styles";

interface AccessoriesProps {
  data: IProduct[];
  navigation: any;
}

export function Products({ data, navigation }: AccessoriesProps) {
  const reversedData = JSON.parse(JSON.stringify(data))?.reverse();

  return (
    <View style={styles.container}>
      <SectionTitle
        title="Produtos mais vendidos"
        subTitle=""
        buttonLabel="ver mais"
        buttonOnPress={() =>
          navigation?.navigate(
            "List",
            JSON.stringify({
              pageTitle: "Produtos mais vendidos",
              content: "topProducts",
            })
          )
        }
      />
      <FlatList
        data={data}
        keyExtractor={(item: IProduct) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} navigation={navigation} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <SectionTitle
        title="Novidades"
        subTitle=""
        buttonLabel="ver mais"
        buttonOnPress={() =>
          navigation?.navigate(
            "List",
            JSON.stringify({
              pageTitle: "Novidades",
              content: "topProducts",
            })
          )
        }
      />
      <FlatList
        data={reversedData}
        keyExtractor={(item: IProduct) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} navigation={navigation} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
}
