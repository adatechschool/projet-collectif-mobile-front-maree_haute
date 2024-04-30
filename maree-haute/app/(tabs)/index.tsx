import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import React, { useState, useEffect } from "react";

const TOKEN=process.env.EXPO_PUBLIC_TOKEN_AIRTABLE;
const AIRTABLE_URL=process.env.EXPO_PUBLIC_AIRTABLE_URL;
export default function Page() {
  console.log(TOKEN);
  console.log(AIRTABLE_URL);
  const [data, setData] = useState([]);
 //appelle la BDD
  const fetchData = async () => {
    const response = await fetch(
     AIRTABLE_URL,
      {
        method: "GET",
        headers: {
          Authorization:TOKEN
            
        },
      }
    );
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
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        {data.map((record) => (
          <Text key={record.Destination}>{record.Destination}</Text>
        ))}
        <Text style={styles.subtitle}>Welcome to your new app.</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
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
