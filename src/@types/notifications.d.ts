export type NotificationParams = (
  message: string,
  type: "danger" | "default" | "info" | "none" | "success" | "warning",
  duration?: number,
  style?: any
) => void;
