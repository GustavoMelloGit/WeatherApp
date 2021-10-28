import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker(props) {
  return (
    <View style={styles.unitsSystem}>
      <Picker
        selectedValue={props.unitsSystem}
        onValueChange={(item) => props.setUnitsSystem(item)}
        mode="dropdown"
      >
        <Picker.Item label="Celsius" value="metric" />
        <Picker.Item label="Fahrenheit" value="imperial" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  unitsSystem: {
    height: 50,
    width: 150,
  },
});
