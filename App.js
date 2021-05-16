import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "0d68f236685e73356250157a1e6b571b";

export default class extends React.Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );

    this.setState({
      isLoading: false,
      temp: temp,
      description: weather[0].main,
    });
  };

  componentDidMount() {
    return this.getLocation();
  }

  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      console.log(longitude, latitude);
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alret("Sorry", "it's sad to say");
    }
  };

  render() {
    const { isLoading, temp, description } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} description={description} />
    );
  }
}
