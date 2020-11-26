import { useEffect } from "react";
//import * as Notifications from "expo-notifications"; and change expoPushNotificatin obj->(for removing the warning)
import { Notifications } from "expo"; //this will be deprecated , so replace this line with above one.(if required)
import * as Permissions from "expo-permissions";

import expoPushTokenApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permissions = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permissions.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};
