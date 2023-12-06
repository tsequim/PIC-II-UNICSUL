import { useEffect, useState } from "react";

import { View, SafeAreaView } from "react-native";

import { List as CardsList } from "../../components/List";

import { Sellers } from "./Sellers";
import { Products } from "./Products";

import { styles } from "./styles";

export function List({ navigation, route }: any) {
  const data = JSON.parse(route?.params);
  const [content, setContent] = useState<JSX.Element>(<></>);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data) {
      navigation.setOptions({ title: data?.pageTitle });

      if (data?.content == "topProducts" || data?.content == "categories") {
        setContent(
          // @ts-ignore
          <Products
            refresh={refresh}
            // isLoading={isLoading}
            // setIsLoading={setIsLoading}
            query={data?.query ?? {}}
            page={page}
            setPage={setPage}
          />
        );
      } else if (data?.content == "topSellers") {
        setContent(
          // @ts-ignore
          <Sellers
            page={page}
            setPage={setPage}
            refresh={refresh}
            // isLoading={isLoading}
            // setIsLoading={setIsLoading}
          />
        );
      }
    }
  }, [route, refresh, page]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <CardsList
          page={page}
          setPage={setPage}
          isLoading={isLoading}
          loadData={setRefresh}
        >
          {content}
        </CardsList>
      </View>
    </SafeAreaView>
  );
}
