import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-rainy" size={100} color="blue" />
        <Text style={styles.text}>{temp}°C</Text>
      </View>
      <View style={styles.halfContainer} />
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
});
