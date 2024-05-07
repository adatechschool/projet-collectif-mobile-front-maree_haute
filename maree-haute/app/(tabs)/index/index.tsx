import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Stack, Tabs, router } from "expo-router";
import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem";
import { Link } from "expo-router";

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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text>HELLO</Text>
      </View>
      <View style={styles.main}>
        {data.map((record) => {
          return (
            <Link
              style={styles.link}
              key={record.id}
              href={{
                pathname: "/[id]",
                params: {
                  id: record.id,
                  imageURL: record.fields.Photos[0].url,
                  destination: record.fields.Destination,
                  destinationCountry:
                    record.fields["Destination State/Country"],
                  difficulty: record.fields["Difficulty Level"],
                  startSeason: record.fields["Peak Surf Season Begins"],
                  endSeason: record.fields["Peak Surf Season Ends"],
                  description: record.fields.Description,
                },
              }}
            >
              <ListItem
                key={record.id}
                imageURL={record.fields.Photos[0].url}
                destination={record.fields.Destination}
                destinationCountry={record.fields["Destination State/Country"]}
                difficulty={record.fields["Difficulty Level"]}
                startSeason={record.fields["Peak Surf Season Begins"]}
                endSeason={record.fields["Peak Surf Season Ends"]}
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
    flexGrow: 1,
    width: "100%",
    // padding: 24,
  },
  main: {
    // flex: 1,
    // justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  link: {
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
