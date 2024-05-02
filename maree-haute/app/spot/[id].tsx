import { StyleSheet, View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Spot() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ID: {id}</Text>
      <Text>BONJOUR !!!</Text>
    </View>
  );
}
