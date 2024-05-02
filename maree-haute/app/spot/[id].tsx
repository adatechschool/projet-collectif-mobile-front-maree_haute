import { StyleSheet, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Spot() {
  const { id } = useLocalSearchParams();
  const { imageURL } = useLocalSearchParams();
  const { destination } = useLocalSearchParams();
  const { destinationCountry }= useLocalSearchParams();
  const { difficulty }= useLocalSearchParams();
  const { startSeason }= useLocalSearchParams();
  const { endSeason }= useLocalSearchParams();
  const { description }= useLocalSearchParams();

  
  return (
    <View>
      <Text>ID: {id}</Text>
      <Image
        style={styles.image}
        source={{
          uri: imageURL,
        }}
      />
      <Text>{destination}</Text>
      <Text>{destinationCountry}</Text>
      <Text> difficulty level{ difficulty }</Text>
      <Text>{ startSeason }</Text>
      <Text>{ endSeason }</Text>
      <Text>{ description }</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  
  image: {
    width: "100%",
    height: 100,
  },
});