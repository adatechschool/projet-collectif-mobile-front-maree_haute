import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SaveSheet({ visible, spotID }) {
  const [list, setList] = useState([]);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("savedList");
      console.log("savedList", value);
      if (value !== null) {
        // value previously stored
        console.log("bonjour", value);
        setList(JSON.parse(value));
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleData = async (index) => {
    try {
      const listname = [...list];
      listname[index].savedSpotsId.push(spotID);
      console.log(listname[index].savedSpotsId);
      console.log(listname);
      const jsonValue = JSON.stringify(listname);
      await AsyncStorage.setItem("savedList", jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {list.map((item, index) => (
        <Button
          key={index}
          title={item.name}
          onPress={() => handleData(index)}
        />
      ))}
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
