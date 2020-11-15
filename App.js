import React from "react";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button, AsyncStorage } from "react-native";
import ListingScreen from "./app/screens/ListingsScreen";
import AppNavigator from "./app/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

export default function App() {
  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 1 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
    } catch (error) {
      console.log(error);
    }
  };

  demo();
  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}

//authentication 6-->jwtDecode(done)
