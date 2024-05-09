import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function FloatingButton({ text, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={onPress}
      style={styles.container}
    >
      <MaterialIcons name="map" size={24} color="white" />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    backgroundColor: "#5EB1EF",
    position: "absolute",
    bottom: 20,
    right: "50%",
    transform: [{ translateX: 50 }],
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
