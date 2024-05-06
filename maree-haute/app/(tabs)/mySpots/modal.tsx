import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  InputModeOptions,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";

export default function Modal() {
  // Define state variables to hold form data
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");
  const [surfBreak, setSurfBreak] = useState("");
  const [description, setDescription] = useState("");

  const difficultyLevelOptions = [
    "Beginner",
    "Moderate",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  const surfBreakOptions = [
    "Reef Break",
    "Point Break",
    "Outer Banks",
    "Beach Break",
  ];

  // Handle form submission
  const handleSubmit = () => {
    // Process form data here (e.g., send it to a server)
    console.log({
      destination,
      location,
      difficultyLevel,
      surfBreak,
      description,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <TextInput
            placeholder="Destination"
            value={destination}
            onChangeText={setDestination}
          />
          <TextInput
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <SelectDropdown
            data={difficultyLevelOptions}
            onSelect={(selectedItem, index) => {
              setDifficultyLevel(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {selectedItem || "Difficulty"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
          <SelectDropdown
            data={surfBreakOptions}
            onSelect={(selectedItem, index) => {
              setSurfBreak(selectedItem);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {selectedItem || "Surf Break"}
                  </Text>
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View
                  style={{
                    ...styles.dropdownItemStyle,
                    ...(isSelected && { backgroundColor: "#D2D9DF" }),
                  }}
                >
                  <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </SafeAreaView>
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
