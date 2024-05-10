import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
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
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Image
        style={styles.image}
        source={{
          uri: imageURL.toString(),
        }}
      />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitleText}>{destination}</Text>
        <Text style={[styles.cardHeadlineText, { fontWeight: "bold" }]}>
          {destinationCountry}
        </Text>
        <Text>{difficulty}</Text>
        <Text>{startSeason}</Text>
        <Text>{endSeason}</Text>
        <View style={styles.separator} />
        <View
          style={{ height: 300, width: "100%", backgroundColor: "lightgray" }}
        />
        <Text>{surfBreak}</Text>
        <Text>{description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
  cardContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    backgroundColor: "white",
    overflow: "hidden",
    padding: 10,
    marginTop: -20,
    zIndex: 10,
  },
  image: {
    width: "100%",
    height: 300,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
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
