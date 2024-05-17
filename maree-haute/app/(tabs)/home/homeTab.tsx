import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Stack, Tabs, router } from "expo-router";
import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import { Link } from "expo-router";
import { FloatingButton } from "../../components/FloatingButton";
import { BlurView } from "expo-blur";
import { FiltersButton } from "../../components/Buttons";
import * as Haptics from "expo-haptics";

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

 //filtre "for beginners"
 const handleBeginnersFilter = async () => {
    const url = POSTGRESS_URL + "?filter[difficulty_Level]=1"
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataFilteredByLevel1 = await response.json();
    setData(dataFilteredByLevel1);
    // console.log("test bouton for beginners", dataFilteredByLevel1);   
  };

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
        style={styles.main}
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
      <View style={styles.filterContainer}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.filterBar}
          showsHorizontalScrollIndicator={false}
        >
          <FiltersButton
            icon={"tune"}
            text="Filters"
            onPress={() => {
              Haptics.selectionAsync();
              router.push("/home/searchModal");
            }}
          />
          <FiltersButton
            icon={"support"}
            text="For Beginners"
            onPress={handleBeginnersFilter}
            primary={false}
          />
          <FiltersButton
            icon={"favorite"}
            text="Most Popular"
            onPress={() => router.push("/home/searchModal")}
            primary={false}
          />
          <FiltersButton
            icon={"explore"}
            text="Closest to you"
            onPress={() => router.push("/home/searchModal")}
            primary={false}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  filterContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  filterBar: {
    // gap: 10,
    marginLeft: 10,
    marginRight: 10,
    // paddingRight: 10,
  },
  scrollView: {
    flex: 1,
  },
  main: {
    flex: 1,
    // justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    width: "100%",
    // backgroundColor: "pink",
    padding: 10,
    marginTop: 70,
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
