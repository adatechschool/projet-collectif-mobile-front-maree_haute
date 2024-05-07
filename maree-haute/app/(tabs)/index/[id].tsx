import { StyleSheet, View, Text, Image, Button } from "react-native";
import { useLocalSearchParams } from "expo-router";

const TOKEN = process.env.EXPO_PUBLIC_TOKEN2_AIRTABLE;
const Airtable = require("airtable");
var base = new Airtable({ apiKey: TOKEN }).base("appfYZhtggrzhPbaz");

export default function Spot() {
  const {
    id,
    imageURL,
    destination,
    destinationCountry,
    difficulty,
    startSeason,
    endSeason,
    description,
    liked
  } = useLocalSearchParams();

  console.log("id", liked, imageURL);

  const updateLike = () => {
    base('Surf Destinations').update([
      {
        "id": id,
        "fields": {
          "Liked": true
        }
      }
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function(record) {
        console.log(record.get('Magic Seaweed Link'));
      });
    });
  };

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
      <Text>{description}</Text>
      <Text>{liked}</Text>

      <Button
        onPress={() => updateLike()}
        title="Like"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
  },
});
