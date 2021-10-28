import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../utils";

const { BORDER_COLOR } = colors;
export default function Divider() {
  return <View style={styles.dividerBox}></View>;
}

const styles = StyleSheet.create({
  dividerBox: {
    marginVertical: 6,
    height: 0.5,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
  },
});
