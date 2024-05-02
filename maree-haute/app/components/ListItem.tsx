import { StyleSheet, View, Text, Image } from "react-native";

interface Props {
  imageURL: string;
  destination: string;
  destinationCountry: string;
  difficulty: string;
  startSeason: string;
  endSeason: string;
}

export default function ListItem({
  imageURL,
  destination,
  destinationCountry,
  difficulty,
  startSeason,
  endSeason,
} :Props) {
  
  return (
    <View>
      <Image
        style={styles.image}
        source={{
          uri: imageURL,
        }}
      />
      <Text>{destination}</Text>
      <Text>{destinationCountry}</Text>
      <Text>{difficulty}</Text>
      <Text>{startSeason}</Text>
      <Text>{endSeason}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 100,
  },
});
