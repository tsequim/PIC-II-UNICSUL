import React from "react";
import { View, Text } from "react-native";
import dayjs from "dayjs";

import Timeline from "../../../TimeLine";

import { formatDateToBr } from "../../../../utils/formatDateToBr";

import { styles } from "./styles";
import { getColorByStatus } from "../../../../screens/Order/styles";
import { THEME } from "../../../../../frontend/src/theme";

const TimelineHeader = () => {
  return <Text style={styles.title}>Status</Text>;
};

export function StatusTimeline({ status, createDate, updateDate }: any) {
  let data = [
    {
      title: {
        content: "Pedido enviado",
        style: {
          fontSize: 14,
        },
      },
      time: {
        content: formatDateToBr(createDate),
      },
    },
    {
      title: {
        content: `Pedido ${status.toLowerCase()}`,
        style: {
          fontSize: 14,
        },
      },
      time: {
        content: formatDateToBr(updateDate),
      },
      icon: {
        style: {
          backgroundColor: getColorByStatus(status),
        },
      },
    },
  ];

  return (
    <Timeline
      TimelineHeader={<TimelineHeader />}
      //   @ts-ignore
      data={data}
      TimelineFooter={""}
    />
  );
}
