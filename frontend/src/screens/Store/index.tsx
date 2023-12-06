import React, { useEffect, useState } from "react";

import { View, Text, ScrollView, Image } from "react-native";
import { Avatar } from "react-native-paper";

import { Avatar as AvatarChar } from "../../components/Avatar";
import { SectionTitle } from "../../components/SectionTitle";
import { ListItem } from "../../components/ListItem";
import { ProductCardHorizontal } from "../../components/ProductCardHorizontal";

import { LocationIcon } from "../../assets/icons/Icons";
import { limitChars } from "../../utils/limitChars";

import { styles } from "./styles";

import { ISeller } from "../../../frontend/src/@types/ISeller";
import { IProduct } from "../../../frontend/src/@types/IProduct";

import { getProducts } from "../../services/apiProducts";

interface IStorePageProps {
  route?: any;
  navigation?: any;
}

export function Store({ route, navigation }: IStorePageProps) {
  const data = route?.params;
  const storeData: ISeller = data ? JSON.parse(data) : null;

  const address = storeData?.address;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      await getProducts({
        sellerId: storeData?.id,
        page: 1,
        pageSize: 5,
      })
        .then((res: any) => {
          setProducts(res.data);
        })
        .catch(console.error);
    })();
  }, []);

  const onPress = () => {
    navigation?.navigate(
      "List",
      JSON.stringify({
        pageTitle: `Produtos de ${storeData?.businessData?.businessName}`,
        content: "topProducts",
        query: {
          sellerId: storeData?.id,
        },
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileBackground}>
        <View style={styles.profile}>
          {storeData?.logoUrl ? (
            <Avatar.Image
              style={styles.profilePic}
              size={100}
              source={{ uri: storeData?.logoUrl }}
            />
          ) : (
            <AvatarChar
              char={storeData?.businessData?.businessName[0]}
              width={90}
            />
          )}
          <Text textBreakStrategy="balanced" style={styles.name}>
            {storeData?.businessData?.businessName}
          </Text>
          {/* <Text style={styles.category}>{storeData.category}</Text> */}

          <View style={styles.address}>
            <LocationIcon width={25} height={20} />
            <Text textBreakStrategy="balanced">
              {address.street}, {address.neighborhood} | {address.city} -{" "}
              {address.state}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.list}>
        <SectionTitle
          title="Principais produtos"
          subTitle=""
          buttonOnPress={onPress}
          buttonLabel="ver mais"
        />

        {products?.map((prod: IProduct, index: number) => (
          <ListItem style={{ backgroundColor: "#" }} key={index}>
            <ProductCardHorizontal navigation={navigation} product={prod} />
          </ListItem>
        ))}
      </View>
    </ScrollView>
  );
}
