import { StyleSheet, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";

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

  console.log(process.env.EXPO_PUBLIC_OPENWEATHER);

  const fectchWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=21.2810&lon=-157.8377&appid=${process.env.EXPO_PUBLIC_OPENWEATHER}`
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    fectchWeatherData();
  }, []);

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
