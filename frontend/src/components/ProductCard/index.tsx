import { View, Text, Image, TouchableOpacity } from "react-native";

import { useDispatch } from "react-redux";
import { addItem } from "../../store/ducks/cart";

import { Notification } from "../Notifications";

import { formatPrice } from "../../utils/formatPrice";
import { limitChars } from "../../utils/limitChars";

import AddIcon from "../../assets/icons/addIcon";

import { styles } from "./styles";
import { IProduct } from "../../../frontend/src/@types/IProduct";

interface ProductCardProps {
  product: IProduct;
  navigation: any;
}

export function ProductCard({ product, navigation }: ProductCardProps) {
  const openScreen = () => {
    navigation.navigate("Product", JSON.stringify(product));
  };

  const dispatch = useDispatch();

  function addItemCart(item: IProduct) {
    // @ts-ignore
    dispatch(addItem(item));
    Notification("Produto adicionado ao carrinho.", "success", 3000);
  }

  const coverImage = product?.photos?.find((item) => item?.isCover)?.url;

  return (
    <TouchableOpacity style={styles.container} onPress={openScreen}>
      <Image source={product.image} style={styles.image} />
      <Text>{limitChars(product.name, 30)}</Text>
      <View style={styles.prices}>
        {/* {product.oldPrice && (
          <Text style={styles.oldPrice}>R${formatPrice(product.oldPrice)}</Text>
        )} */}
        <Text style={styles.price}>R${formatPrice(product.value)}</Text>
      </View>
      <View style={styles.addButton}>
        <TouchableOpacity onPress={() => addItemCart(product)}>
          <AddIcon style={styles.addIcon} width={25} height={25} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
