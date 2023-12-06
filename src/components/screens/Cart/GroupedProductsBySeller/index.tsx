import { View, Text } from "react-native";

import { IProduct } from "../../../../@types/IProduct";

import { ProductCard } from "../ProductCard";
import { Summary } from "../Summary";

import { limitChars } from "../../../../utils/limitChars";
import { getDistinctObjects } from "../../../../utils/getDistinctObjects";

import { styles } from "./styles";

interface IGroupedProductsBySeller {
  products: IProduct[];
}

export function GroupedProductsBySeller({
  products,
}: IGroupedProductsBySeller): any {
  const stores = [...new Set(products?.map((prod: IProduct) => prod?.store))];

  const groupedProducts: IProduct[] = getDistinctObjects(products, "id");

  return (
    // @ts-ignore
    stores?.map((store: string, index) => (
      <View key={index} style={styles.container}>
        <Text style={styles.storeName}>{limitChars(store, 30)}</Text>
        {groupedProducts
          ?.filter((product: IProduct) => product.store == store)
          ?.map((product: IProduct, index: number) => (
            <ProductCard key={index} {...product} />
          ))}
        <Summary
          total={false}
          products={products?.filter(
            (product: IProduct) => product.store == store
          )}
        />
      </View>
    ))
  );
}
