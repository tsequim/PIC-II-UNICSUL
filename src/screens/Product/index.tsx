import { View, ScrollView, Image, SafeAreaView } from "react-native";

import { Description } from "../../components/screens/Product/Description";
import Slider from "../../components/screens/Product/ImagesSlider";

import { styles } from "./styles";
import { IProduct } from "../../@types/IProduct";

export function Product({ route, navigation }: any) {
  const data = route?.params;

  const product: IProduct = JSON.parse(data);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Slider data={[product?.image]} />
        <Description navigation={navigation} product={product} />
      </View>
    </SafeAreaView>
  );
}
