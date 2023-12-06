import { View } from "react-native";

import { SectionTitle } from "../SectionTitle";
import { StoreCard } from "../StoreCard";
import { ListItem } from "../ListItem";

import { ISeller } from "../../../frontend/src/@types/ISeller";

import { styles } from "./styles";

interface StoresProps {
  data: ISeller[];
  navigation: any;
}

export function Stores({ data, navigation }: StoresProps) {
  const onPress = (store: ISeller, navigation: any) => {
    navigation.navigate("Store", JSON.stringify(store));
  };

  return (
    <View style={styles.container}>
      <SectionTitle
        title="Principais distribuidoras"
        subTitle=""
        buttonLabel="ver todas"
        buttonOnPress={() => {
          navigation.navigate(
            "List",
            JSON.stringify({
              pageTitle: "Principais distribuidoras",
              content: "topSellers",
            })
          );
        }}
      />
      <View style={styles.storeList}>
        {data?.map((item, index) => (
          <ListItem key={index}>
            <StoreCard data={item} onPress={() => onPress(item, navigation)} />
          </ListItem>
        ))}
      </View>
    </View>
  );
}
