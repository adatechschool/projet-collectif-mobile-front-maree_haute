import { StyleSheet, Text, View } from "react-native";
import { Stack, Tabs } from "expo-router";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://api.airtable.com/v0/appfYZhtggrzhPbaz/Surf%20Destinations?&view=By%20Surf%20Break",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer patI2bxmroBSEpdLF.80f18186cf70c1bd9380a09de6dee32300da1b6a3a241c775f555f91c16facb6",
        },
      }
    );
    const data = await response.json();
    const records = data.records.map((record) => record.fields);
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
