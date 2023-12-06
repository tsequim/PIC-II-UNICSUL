import { View, Image, Text, TouchableOpacity } from "react-native";

import { limitChars } from "../../utils/limitChars";

import { styles } from "./styles";

import { ISeller } from "../../../frontend/src/@types/ISeller";

interface IStoreCardProps {
  data: ISeller;
  onPress?: () => void;
}

export function StoreCard({ data, onPress = () => {} }: IStoreCardProps) {
  const address = limitChars(
    `${data?.address?.neighborhood}, ${data?.address?.city} - ${data?.address?.state}`,
    45
  );

  return (
    <TouchableOpacity key={data?.id} style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: data?.logoUrl }} />
      </View>
      <View style={styles.storeDescription}>
        <Text style={styles.name}>
          {limitChars(data?.businessData?.businessName, 20)}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingVertical: 4,
          }}
        >
          <Text textBreakStrategy="balanced" style={styles.address}>
            {address}
          </Text>
          {/* <Text style={styles.freightRate}>
            {freightRate ? freightRate : "Entrega grátis"}
          </Text> */}
        </View>
        {/* <Text style={styles.category}>{data?.}</Text> */}
        {/* <Text style={styles.category}> o|o {category}</Text> */}
      </View>
    </TouchableOpacity>
  );
}
