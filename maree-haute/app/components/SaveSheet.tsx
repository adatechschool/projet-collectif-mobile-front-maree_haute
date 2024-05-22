import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { FloatingButton } from "./FloatingButton";

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
      // activeOpacity={1}
      onPress={() => {
        visible(false);
      }}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {}}
        style={styles.card}
      >
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
        <ScrollView style={styles.listArea}>
          {list.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.listItem,
                index === list.length - 1 ? { marginBottom: 85 } : {},
              ]}
              key={index}
              onPress={() => {
                handleData(index);
                visible(false);
              }}
            >
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <FloatingButton
          icon="add"
          text="New list"
          onPress={() => {
            router.push("/saved/listModal");
          }}
        />
        {/* <TouchableOpacity
          style={styles.newListButton}
          onPress={() => {
            router.push("/saved/listModal");
          }}
        >
          <Text>TEST</Text>
        </TouchableOpacity> */}
      </TouchableOpacity>
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
    height: 400,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 103,
  },
  listArea: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
    height: "100%",
    width: "100%",
  },
  listItem: {
    padding: 10,
    borderWidth: 1.5,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
  },
  newListButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 10,
  },
});
