import { Redirect } from "expo-router";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DifficultyLabel, LargeDifficultyLabel } from "./components/Labels";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const defaultSavedList = async () => {
    try {
      const existingList = await AsyncStorage.getItem("savedList");
      console.log("savedList", existingList);
      if (existingList !== null) {
        // setExistingList(JSON.parse({ name: "Saved", savedSpotsId: [] }));
        console.log("existingList", existingList);
      } else {
        const listName = [{ name: "Saved", savedSpotsId: [] }];
        const jsonValue = JSON.stringify(listName);
        await AsyncStorage.setItem("savedList", jsonValue);
        // setExistingList(JSON.parse(jsonValue));
        console.log("Else!", jsonValue);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    defaultSavedList();
  }, []);

  return <Redirect href="(tabs)/home" />;
  // return (
  // <View style={Styles.container}>
  //   <ScrollView
  //     horizontal
  //     showsHorizontalScrollIndicator={false}
  //     contentContainerStyle={Styles.horizontalContainer}
  //   >
  //     {/* <DifficultyLabel difficulty={4} /> */}
  //     <LargeDifficultyLabel difficulty={1} />
  //     <LargeDifficultyLabel difficulty={2} />
  //     <LargeDifficultyLabel difficulty={3} />
  //     <LargeDifficultyLabel difficulty={4} />
  //     <LargeDifficultyLabel difficulty={5} />
  //   </ScrollView>
  // </View>
  // );
}

const Styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    gap: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
});
