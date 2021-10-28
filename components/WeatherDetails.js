import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../utils";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "./Divider";

const { PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR } = colors;

export default function WeatherDetails({ currentWeather, unitsSystem }) {
  const {
    main: { feels_like, humidity, pressure },
    wind: { speed },
  } = currentWeather;
  const roundedWindSpeed = Math.round(speed);
  const tempUnit = unitsSystem === "metric" ? "C" : "F";
  const windSpeed =
    unitsSystem === "metric"
      ? `${roundedWindSpeed} m/s`
      : `${roundedWindSpeed} miles/h`;
  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
        <View style={styles.detailsBox}>
          <FontAwesome5
            name="temperature-low"
            size={25}
            color={PRIMARY_COLOR}
          />
          <View>
            <Text style={styles.detailsText}>Feels like:</Text>
            <Text style={styles.valueText}>
              {feels_like.toFixed(0)}°{tempUnit}
            </Text>
          </View>
        </View>
        <Divider />
        <View style={styles.detailsBox}>
          <MaterialCommunityIcons
            name="water"
            size={30}
            color={PRIMARY_COLOR}
          />
          <View>
            <Text style={styles.detailsText}>Humidity:</Text>
            <Text style={styles.valueText}>{humidity}%</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.detailsBox}>
          <FontAwesome5 name="wind" size={24} color={PRIMARY_COLOR} />
          <View>
            <Text style={styles.detailsText}>Wind speed:</Text>
            <Text style={styles.valueText}>{windSpeed}</Text>
          </View>
        </View>
        <Divider />
        <View style={styles.detailsBox}>
          <MaterialCommunityIcons
            name="speedometer"
            size={30}
            color={PRIMARY_COLOR}
          />
          <View>
            <Text style={styles.detailsText}>Pressure:</Text>
            <Text style={styles.valueText}>{pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherDetails: {
    borderWidth: 1,
    margin: 15,
    borderColor: BORDER_COLOR,
    borderRadius: 10,
  },
  weatherDetailsRow: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  detailsText: {
    fontSize: 16,
    color: "#000",
  },
  detailsBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    margin: 6,
    alignItems: "center",
  },
  valueText: {
    color: SECONDARY_COLOR,
    fontSize: 16,
    alignSelf: "flex-end",
  },
});
