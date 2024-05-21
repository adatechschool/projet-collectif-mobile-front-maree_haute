import { View, Button, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function SavedTab() {
  const [listName, setListName] = useState("");

  async function createNewList(newListName) {
    if (!newListName.trim()) {
      Alert.alert("Error", "List name cannot be empty");
      return;
    }

    try {
      const storage = await AsyncStorage.getItem("savedList");
      const parsedStorage = storage ? JSON.parse(storage) : [];
      const newList = { name: newListName, savedSpotsId: [] };
      parsedStorage.push(newList);
      await AsyncStorage.setItem("savedList", JSON.stringify(parsedStorage));
      console.log(parsedStorage);
      setListName(""); // Clear the input after saving
    } catch (error) {
      console.error("Error saving list", error);
    }
    router.back();
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        placeholder="Create list name"
        onChangeText={(text) => setListName(text)}
        value={listName}
      />
      <Button title="Create new list" onPress={() => createNewList(listName)} />
    </View>
  );
}
