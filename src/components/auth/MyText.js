import * as React from "react";
import { Text, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../resources/constants/Colors";

export default function MyText({ children, type = "body", style }) {
  const theme = useColorScheme();
  return (
    <Text style={[styles[type], { color: Colors.dark.simple_white, }, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  body: {
    fontSize: 18,
  },
  caption: {
    fontSize: 14,
  },
});
