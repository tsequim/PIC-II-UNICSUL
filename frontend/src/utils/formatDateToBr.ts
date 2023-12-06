import dayjs from "dayjs";

export const formatDateToBr = (data: Date) => {
  return dayjs(data).subtract(3, "h").format("DD/MM/YYYY HH:mm:ss");
};
