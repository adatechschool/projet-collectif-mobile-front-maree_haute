import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { DropDown } from "../../components/DropDown";
import { DifficultyLabel } from "../../components/Labels";

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
    <SafeAreaView>
      <Text>searchModal</Text>
      <DropDown
        list={filters}
        title="Filters"
        isIndex={false}
        setSelectedItem={setFilter}
      />
      <DropDown
        list={surfBreakOptions}
        title="Surf Break"
        isIndex={false}
        setSelectedItem={setSurfBreak}
      />
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
            <DifficultyLabel difficulty={level.value} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
    paddingHorizontal: 20,
  },
  difficultyOption: {
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // paddingRight: 10,
  },
  difficultyText: {
    fontSize: 16,
  },
});
