import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Button,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { DropDown } from "../../components/DropDown";
import { DifficultyLabel, LargeDifficultyLabel } from "../../components/Labels";
import { FiltersButton } from "../../components/Buttons";

export default function searchModal() {
  const [filter, setFilter] = useState("");
  const [surfBreak, setSurfBreak] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const filters = ["Most popular", "Most recent", "Most liked"];

  const surfBreakOptions = [
    "Reef Break",
    "Point Break",
    "Outer Banks",
    "Beach Break",
  ];

  const difficultyLevels = [
    { label: "Novice", value: 1 },
    { label: "Beginner", value: 2 },
    { label: "Proficient", value: 3 },
    { label: "Advanced", value: 4 },
    { label: "Expert", value: 5 },
  ];

  const handleDifficultySelect = (value) => {
    setDifficultyLevel(value);
    // console.log("Selected difficulty:", value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Sort by:</Text>
        <DropDown
          list={filters}
          title="Filters"
          isIndex={false}
          setSelectedItem={setFilter}
        />
        <Text style={styles.text}>Surf Break type:</Text>

        <DropDown
          list={surfBreakOptions}
          title="Surf Break"
          isIndex={false}
          setSelectedItem={setSurfBreak}
        />
        <Text style={styles.text}>Difficulty level:</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalContainer}
      >
        {difficultyLevels.map((level) => (
          <TouchableOpacity
            key={level.label}
            style={[
              styles.difficultyOption,
              { opacity: difficultyLevel === level.value ? 1 : 0.4 },
            ]}
            onPress={() => handleDifficultySelect(level.value)}
          >
            <LargeDifficultyLabel difficulty={level.value} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        {/* <FiltersButton
          icon={"cancel"}
          onPress={() => console.log("clear")}
          text="Clear"
          primary={false}
        /> */}
        <Button title="Clear Filters" onPress={() => console.log("clear")} />
        <FiltersButton
          icon={"search"}
          onPress={() => console.log("search")}
          text="Search"
        />
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innerContainer: {
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  difficultyOption: {},
  difficultyText: {
    fontSize: 16,
  },
  footer: {
    borderTopColor: "#E0E0E0",
    borderTopWidth: 1.5,
    alignSelf: "flex-start",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});
