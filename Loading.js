import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the Foking Weather</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#FAEBD7",
  },
  text: {
    color: "#2F4F4F",
    fontSize: 32,
  },
});
