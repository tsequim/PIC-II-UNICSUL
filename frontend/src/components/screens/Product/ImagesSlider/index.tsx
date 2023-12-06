import React from "react";

import { View, Text, Dimensions, Image, Linking } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";
import Pagination from "./Pagination";

import { IPhoto } from "../../../../../frontend/src/@types/IProduct";

import { styles } from "./styles";

interface ISliderProps {
  data: IPhoto[];
}

export default function Slider({ data }: ISliderProps) {
  const width = Dimensions.get("window").width;

  const progressValue = useSharedValue<number>(data?.length);

  const isLoading = data?.length == 0;

  return (
    <GestureHandlerRootView>
      <View style={{ position: "relative" }}>
        <Carousel
          loop
          style={{ zIndex: 2, position: "relative" }}
          enabled
          width={width}
          //   height={200}
          // autoPlay={true}
          data={data}
          autoPlayInterval={5000}
          scrollAnimationDuration={1000}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
          // onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ item }) => (
            <View
              // onTouchEnd={() => Linking.openURL(item?.)}
              style={{ height: "100%" }}
            >
              <Image style={styles.image} source={item} />
            </View>
          )}
        />

        <Pagination data={data} progressValue={progressValue} />
      </View>
    </GestureHandlerRootView>
  );
}
