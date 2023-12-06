import { showMessage } from "react-native-flash-message";

import { notificationStyles } from "./styles";

import { NotificationParams } from "../../@types/notifications";

export const Notification: NotificationParams = (
  message,
  type,
  duration = 2500,
  style
) =>
  showMessage({
    message: message,
    type: type,
    duration: duration,
    titleStyle: notificationStyles.notificationTitle,
    style: style ?? notificationStyles.notification,
  });
