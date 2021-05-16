import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["red", "blue"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#4c669f", "#3b5998", "#192f6a"],
  },
  Thunderstorm: {
    iconName: "",
    gradient: [],
  },
  Drizzle: {
    iconName: "",
    gradient: [],
  },

  Snow: {
    iconName: "",
    gradient: [],
  },
  Atmosphere: {
    iconName: "",
    gradient: [],
  },
  Clear: {
    iconName: "",
    gradient: [],
  },
  Clouds: {
    iconName: "",
    gradient: [],
  },
  Mist: {
    iconName: "",
    gradient: [],
  },
  Dust: {
    iconName: "",
    gradient: [],
  },
};

export default function Weather({ temp, description }) {
  return (
    <LinearGradient
      colors={weatherOptions[description].gradient}
      style={styles.container}
    >
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[description].iconName}
          size={100}
          color="white"
        />
        <Text style={styles.text}>{temp}°C</Text>
      </View>
      <View style={styles.halfContainer} />
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  description: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
    "Haze",
  ]).isRequired,
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
    color: "white",
  },
});
