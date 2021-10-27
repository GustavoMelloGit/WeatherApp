import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-community/picker";

export default function UnitsPicker(props) {
  return (
    <View>
      <Picker
        selectedValue={props.unitsSystem}
        onValueChange={(item) => props.setUnitsSystem(item)}
      >
        <Picker.Item label="Celsius" value="metric" />
        <Picker.Item label="Fahrenheit" value="imperial" />
      </Picker>
    </View>
  );
}
