import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SaveSheet from "../../components/SaveSheet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { DifficultyLabel } from "../../components/Labels";

export default function Spot() {
  const [showSaveSheet, setShowSaveSheet] = useState(false);

  const {
    id,
    imageURL,
    destination,
    destinationCountry,
    difficulty,
    startSeason,
    endSeason,
    surfBreak,
    description,
  } = useLocalSearchParams();

  console.log("id", imageURL);

  const saveSpot = async (value) => {
    try {
      await AsyncStorage.setItem("savedSpot", value);
      console.log(id);
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: imageURL.toString(),
          }}
        />
      </View>
      <ScrollView
        style={styles.container}
        // stickyHeaderIndices={[0]}
        // alwaysBounceVertical={false}
        // bounces={false}
      >
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitleText}>{destination}</Text>
          <Text style={[styles.cardHeadlineText, { fontWeight: "bold" }]}>
            {destinationCountry}
          </Text>
          <Text>{difficulty}</Text>
          <Text>{startSeason}</Text>
          <Text>{endSeason}</Text>
          <View style={styles.separator} />
          {/* <View
            style={{ height: 500, width: "100%", backgroundColor: "lightgray" }}
          /> */}
          <Text>{surfBreak}</Text>
          <Text>{description}</Text>
        </View>
      </ScrollView>

      {showSaveSheet && <SaveSheet spotID={id} visible={setShowSaveSheet} />}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => router.back()}
        style={styles.closeButton}
      >
        <MaterialIcons name="arrow-back" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={
          !showSaveSheet ? () => setShowSaveSheet(true) : () => setShowSaveSheet
        }
        style={styles.bookmarkButton}
      >
        <MaterialIcons name="bookmark-outline" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.shareButton}>
        <MaterialIcons name="ios-share" size={24} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
    zIndex: 30,
  },
  cardContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
    padding: 20,
    marginTop: 270,
    // zIndex: 30,
  },
  imageContainer: {
    height: 400,
    width: "100%",
    backgroundColor: "pink",
    zIndex: 10,
    position: "absolute",
    top: 0,
    left: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  cardTitleText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  cardHeadlineText: {
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: "lightgray",
    marginVertical: 10,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 100,
    backgroundColor: "white",
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  bookmarkButton: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 100,
    backgroundColor: "white",
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  shareButton: {
    position: "absolute",
    top: 50,
    right: 70,
    zIndex: 100,
    backgroundColor: "white",
    borderRadius: 50,
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
  },
});
