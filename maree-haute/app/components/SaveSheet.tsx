import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

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
    <TouchableOpacity
      onPress={() => {
        visible(false);
      }}
      style={styles.container}
    >
      <View style={styles.card}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>Save to a list</Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              visible(false);
            }}
          >
            <MaterialIcons name="close" size={27} color="black" />
          </TouchableOpacity>
        </View>

        {list.map((item, index) => (
          <Button
            key={index}
            title={item.name}
            onPress={() => handleData(index)}
          />
        ))}
        {/* <Button
          title="Save"
          onPress={() => {
            visible(false);
            console.log(list);
          }}
        /> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 101,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  card: {
    // justifyContent: "center",
    // alignItems: "center",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: "absolute",
    height: 300,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 103,
  },
});
