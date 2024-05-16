import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, Tabs, router } from "expo-router";
import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import { Link } from "expo-router";
import { FloatingButton } from "../../components/FloatingButton";

const POSTGRESS_URL = process.env.EXPO_PUBLIC_POSTGRESS_URL;

export default function Page() {
  const [data, setData] = useState([]);
  //appelle la BDD
  const fetchData = async () => {
    const response = await fetch(POSTGRESS_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const fetchedData = await response.json();

    //record-> correspond à spot avec ses informations
    // console.log("texte", fetchedData)
    console.log("texte", fetchedData);
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToDetail = (record) => {
    // Navigate to detailed view with specified params
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
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={() => console.log("End reached")}
        onEndReachedThreshold={0.5}
      />
      <FloatingButton
        icon={"map"}
        text="Map"
        onPress={() => router.push("/mySpots")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollView: {
    flex: 1,
  },
  main: {
    // flex: 1,
    // justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    width: "100%",
    // backgroundColor: "pink",
    padding: 10,
    gap: 10,
  },
  link: {
    width: "100%",
    backgroundColor: "purple",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  box: {
    width: "100%",
    height: 200,
    backgroundColor: "red",
  },
});
