import { StyleSheet, View, Text, Image } from "react-native";
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
    <View>
      <Text>ID: {id}</Text>
      <Image
        style={styles.image}
        source={{
          uri: imageURL.toString(),
        }}
      />
      <Text>{destination}</Text>
      <Text>{destinationCountry}</Text>
      <Text> difficulty level{difficulty}</Text>
      <Text>{startSeason}</Text>
      <Text>{endSeason}</Text>
      <Text>{surfBreak}</Text>
      <Text>{description}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
  },
});
