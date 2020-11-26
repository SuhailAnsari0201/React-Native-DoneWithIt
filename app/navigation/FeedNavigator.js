import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ViewImageScreen from "../screens/ViewImageScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Listing"
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ListingDetails"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ViewImage"
      component={ViewImageScreen}
      options={{
        title: "",
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
//How to hide bottom navigation bar on a specific screen in react native?(stackoverflow query)
//  navigationOptions: () => {
//    return {
//      tabBarVisible: false,
//    };
//  };
