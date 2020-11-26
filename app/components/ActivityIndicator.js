import React from "react";
import { StyleSheet, ActivityIndicator as Loading, View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <Loading animating={true} size={60} color="tomato" />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "white",
    opacity: 0.8,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
