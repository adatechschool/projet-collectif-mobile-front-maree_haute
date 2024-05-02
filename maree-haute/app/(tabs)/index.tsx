import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, Tabs, router } from "expo-router";
import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import { Link } from "expo-router";

const TOKEN = process.env.EXPO_PUBLIC_TOKEN_AIRTABLE;
const AIRTABLE_URL = process.env.EXPO_PUBLIC_AIRTABLE_URL;
export default function Page() {
  console.log(TOKEN);
  console.log(AIRTABLE_URL);
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
    //record.fields-> cherche les valeurs corrrespondantes à la clé fields du tableau data
    const records = fetchedData.records.map((record) => record.fields);
    console.log(records);
    setData(records);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        {data.map((record, index) => {
          return (
            <Link href={{ pathname: "/spot/[id]", params: { id: index } }}>
              <ListItem
                key={index}
                imageURL={record.Photos[0].url}
                destination={record.Destination}
                destinationCountry={record["Destination State/Country"]}
                difficulty={record["Difficulty Level"]}
                startSeason={record["Peak Surf Season Begins"]}
                endSeason={record["Peak Surf Season Ends"]}
              />
            </Link>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    padding: 24,
  },
  main: {
    // flex: 1,
    // justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
