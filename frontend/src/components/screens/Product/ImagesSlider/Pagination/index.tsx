import React from "react";

import { View, Text } from "react-native";

import PaginationItem from "../PaginationItem";

import { styles } from "./styles";

interface IPaginationProps {
  data: any[];
  progressValue: number | any;
}

const Pagination = ({ data, progressValue }: IPaginationProps) => {
  return (
    !!progressValue && (
      <View style={styles.container}>
        {data.map((item: any, index: number) => {
          return (
            <PaginationItem
              backgroundColor={"#000"}
              animValue={progressValue}
              index={index}
              key={index}
              isRotate={false}
              length={data?.length}
            />
          );
        })}
      </View>
    )
  );
};

export default Pagination;
