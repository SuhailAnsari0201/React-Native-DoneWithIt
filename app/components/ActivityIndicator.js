import React from "react";
import { StyleSheet, ActivityIndicator as Loading } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <Loading
      style={styles.container}
      animating={true}
      size={60}
      color="tomato"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityIndicator;
