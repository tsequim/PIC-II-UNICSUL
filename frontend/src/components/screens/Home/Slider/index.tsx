import React from "react";

import { View, Text, Dimensions, Image, Linking } from "react-native";
import Carousel from "react-native-reanimated-carousel";
// import { GestureHandlerGestureEvent } from "react-native-gesture-handler";
import SkeletonContent from "react-native-skeleton-content";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { IBanner } from "../../../../../frontend/src/@types/banners";

import { styles } from "./styles";

interface ISliderProps {
  data: IBanner[];
}

export default function Slider({ data }: ISliderProps) {
  const width = Dimensions.get("window").width;

  const isLoading = data?.length == 0;

  return (
    <GestureHandlerRootView>
      <Carousel
        loop
        enabled
        width={width}
        height={width / 2}
        autoPlay={true}
        data={data}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        autoPlayInterval={5000}
        scrollAnimationDuration={1000}
        // onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item }) => (
          <View style={styles.container}>
            {/* @ts-ignore */}
            <Image style={styles.image} source={item} />
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
}
