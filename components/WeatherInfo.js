import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../utils";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;
export default function WeatherInfo({ currentWeather, unitsSystem }) {
  const unit = unitsSystem === "metric" ? "C" : "F";

  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;
  const { icon, main, description } = details;
  const iconURL = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <View style={styles.weatherInfo}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconURL }} />
      <Text style={styles.textPrimary}>
        {temp.toFixed(0)}°{unit}
      </Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfo: {
    alignItems: "center",
  },
  weatherIcon: {
    width: 100,
    height: 100,
  },
  weatherDescription: {
    textTransform: "capitalize",
  },
  textPrimary: {
    fontSize: 40,
    color: PRIMARY_COLOR,
  },
  textSecondary: {
    fontSize: 28,
    color: SECONDARY_COLOR,
    fontWeight: "500",
    marginTop: 10,
  },
});
