import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Button,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function Spot() {
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

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
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
    </View>
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
});
