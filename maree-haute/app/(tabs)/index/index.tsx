import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, Tabs, router } from "expo-router";
import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import { Link } from "expo-router";
import {
  DifficultyLabel,
  DifficultyLabelBlueprint,
} from "../../components/Labels";
import { FloatingButton } from "../../components/FloatingButton";

const TOKEN = process.env.EXPO_PUBLIC_TOKEN_AIRTABLE;
const AIRTABLE_URL = process.env.EXPO_PUBLIC_AIRTABLE_URL;

export default function Page() {
  const [data, setData] = useState([]);
  //appelle la BDD
  const fetchData = async () => {
    const response = await fetch(AIRTABLE_URL, {
      method: "GET",
      headers: {
        Authorization: TOKEN,
      },
    });
    const fetchedData = await response.json();

    //record-> correspond à spot avec ses informations
    const record = fetchedData.records.map((spot) => {
      return spot;
    });
    // console.log("texte", record)
    setData(record);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToDetail = (record) => {
    // Navigate to detailed view with specified params
    router.push({
      pathname: "/[id]",
      params: {
        id: record.id,
        imageURL: record.fields.Photos[0].url,
        destination: record.fields.Destination,
        destinationCountry: record.fields["Destination State/Country"],
        difficulty: record.fields["Difficulty Level"],
        startSeason: record.fields["Peak Surf Season Begins"],
        endSeason: record.fields["Peak Surf Season Ends"],
        surfBreak: record.fields["Surf Break"],
        description: record.fields.Description,
      },
    });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          {data.map((record) => (
            <ListItem
              key={record.id}
              imageURL={record.fields.Photos[0].url}
              destination={record.fields.Destination}
              destinationCountry={record.fields["Destination State/Country"]}
              difficulty={record.fields["Difficulty Level"]}
              startSeason={record.fields["Peak Surf Season Begins"]}
              endSeason={record.fields["Peak Surf Season Ends"]}
              surfBreak={record.fields["Surf Break"]}
              description={record.fields.Description}
              onPress={() => navigateToDetail(record)}
            />
          ))}
        </View>
      </ScrollView>
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
