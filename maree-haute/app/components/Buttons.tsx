import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function FiltersButton({ icon, text, onPress, primary = true }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, primary ? styles.primary : styles.secondary]}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={primary ? "white" : "black"}
      />
      <Text
        style={[
          styles.text,
          primary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    borderWidth: 2,
    marginRight: 10,
  },
  primary: {
    backgroundColor: "#5EB1EF",
    borderColor: "#5EB1EF",
  },
  secondary: {
    backgroundColor: "#fff",
    borderColor: "#000",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
  },
  primaryText: {
    color: "#fff",
  },
  secondaryText: {
    color: "#000",
  },
});
