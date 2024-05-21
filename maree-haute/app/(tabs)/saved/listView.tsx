import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Link, router } from "expo-router";
import { FloatingButton } from "../../components/FloatingButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import SavedList from "../../components/SavedList";
import { useLocalSearchParams } from "expo-router";
import ListItem from "../../components/ListItem";

export default function ListView() {
  const [savedLists, setSavedLists] = useState([]);
  const { ids, name, index } = useLocalSearchParams();

  console.log("ids", ids);

  const fetchSavedLists = async () => {
    const response = await fetch(
      process.env.EXPO_PUBLIC_POSTGRESS_URL + `/save?ids=${ids}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const fetchedData = await response.json();
    setSavedLists(fetchedData);
    console.log("texte", fetchedData);
  };

  useEffect(() => {
    fetchSavedLists();
  }, []);

  const deleteList = async () => {
    try {
      const storage = await AsyncStorage.getItem("savedList");
      const parsedStorage = storage ? JSON.parse(storage) : [];
      const listToDeleteIndex = parsedStorage.findIndex(
        (list) => list.name === name
      );
      if (listToDeleteIndex !== -1) {
        parsedStorage.splice(listToDeleteIndex, 1);
        await AsyncStorage.setItem("savedList", JSON.stringify(parsedStorage));
        setSavedLists(parsedStorage);
        console.log("List deleted.", parsedStorage);
        router.back();
      } else {
        Alert.alert("Error", "List not found");
      }
    } catch (error) {
      console.error("Error deleting list", error);
    }
  };

  const navigateToDetail = (record) => {
    router.push({
      pathname: "/home/[id]",
      params: {
        id: record.id,
        imageURL: record.photos[0].url,
        destination: record.destination,
        destinationCountry: record.destination_State_Country,
        difficulty: record.difficulty_Level,
        startSeason: record.peak_Surf_Season_Begins,
        endSeason: record.peak_Surf_Season_Ends,
        surfBreak: record.surf_Break,
        description: record.description,
      },
    });
  };

  const renderListItem = ({ item }) => (
    <ListItem
      key={item.id}
      imageURL={item.photos[0].url}
      destination={item.destination}
      destinationCountry={item.address}
      difficulty={item.difficulty_Level}
      startSeason={item.peak_Surf_Season_Begins}
      endSeason={item.peak_Surf_Season_Ends}
      surfBreak={item.surf_Break}
      description={item.description}
      onPress={() => navigateToDetail(item)}
    />
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={deleteList}>
        <Text style={{ color: "red", marginVertical: 20 }}>Delete</Text>
      </TouchableOpacity>
      <FlatList
        data={savedLists}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
        onEndReached={() => console.log("End reached")}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
