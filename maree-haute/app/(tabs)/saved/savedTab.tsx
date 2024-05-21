import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";
import { FloatingButton } from "../../components/FloatingButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import SavedList from "../../components/SavedList";

export default function SavedTab() {
  const [savedLists, setSavedLists] = useState([]);
  const fetchSavedLists = async () => {
    const storage = await AsyncStorage.getItem("savedList");
    console.log("storage", storage);
    const parsedStorage = JSON.parse(storage);
    setSavedLists(parsedStorage);
    console.log(parsedStorage[0].savedSpotsId);
    const ids = parsedStorage[0].savedSpotsId.join(",");
  };
  useEffect(() => {
    fetchSavedLists();
  }, []);

  const handleOpenList = (id, name) => {
    router.push({
      pathname: "saved/listView",
      params: { ids: id, name: name },
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {savedLists.map((list, index) => (
        <SavedList
          key={index * Math.random()}
          name={list.name}
          onPress={() => {
            handleOpenList(list.savedSpotsId, list.name);
          }}
          spotsIds={list.savedSpotsId.join(",")}
        />
      ))}

      <Text>Saved tab</Text>
      <FloatingButton
        icon={"add"}
        text="New list"
        onPress={() => router.push("saved/listModal")}
      />
    </View>
  );
}
