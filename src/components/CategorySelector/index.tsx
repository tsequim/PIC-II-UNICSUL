import { FlatList, View } from "react-native";

// import SkeletonContent from "react-native-skeleton-content";
import { Button } from "../Button/index";

import { styles } from "./styles";

interface Categorie {
  id: string;
  name: string;
  iconUrl: string | any;
}

interface DataProps {
  data: Categorie[];
  navigation: any;
}

export function CategorySelector({ data, navigation }: DataProps) {
  const handlePress = (item: Categorie) => {
    navigation.navigate(
      "List",
      JSON.stringify({
        pageTitle: `Para ${item.name}`,
        content: "categories",
        query: {
          categoryId: item?.id,
        },
      })
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            buttonStyles={{}}
            onPress={() => handlePress(item)}
            title={item.name}
            icon={item.iconUrl}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentsList}
      />
    </View>
  );
}
