import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function MySpots() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Link href="../modals/modalCreateSpot">Here is my modal !</Link>
    </View>
  );
}
