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
}: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageURL,
        }}
      />
      <View style={styles.card}>
        <Text>{destination}</Text>
        <Text>{destinationCountry}</Text>
        <Text>{difficulty}</Text>
        <Text>{startSeason}</Text>
        <Text>{endSeason}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 5,
    // flex: 1,
  },
  card: {
    width: "100%",
    backgroundColor: "pink",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 100,
  },
});
