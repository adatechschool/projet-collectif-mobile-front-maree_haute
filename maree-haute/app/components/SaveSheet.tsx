import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SaveSheet({ visible }) {
  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const listName = [{ name: "Saved" }];
      const jsonValue = JSON.stringify(listName);
      await AsyncStorage.setItem("savedList", jsonValue);

      const value = await AsyncStorage.getItem("savedList");
      console.log("savedList", value);
      if (value !== null) {
        // value previously stored
        setList(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Save"
        onPress={() => {
          visible(false);
          console.log(list);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: 300,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "grey",
    zIndex: 100,
  },
});
