import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      {/* <View style={styles.closeIcon} onTouchMove={() => navigation.goBack()}>
        <MaterialCommunityIcons name="close" color="white" size={25} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={25}
        />
      </View> */}
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: route.params.images[0].url }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,

    //top: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
