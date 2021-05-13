import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const {
        coords: { altitude, latitude },
      } = await Location.getCurrentPositionAsync();
      console.log(altitude, latitude);
      this.setState({
        isLoading: false,
      });
    } catch (error) {
      Alert.alret("Sorry", "it's sad to say");
    }
  };
  componentDidMount() {
    return this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
