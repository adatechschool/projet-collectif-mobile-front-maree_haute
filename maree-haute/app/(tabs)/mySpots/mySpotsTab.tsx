import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";

export default function MySpots() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => router.push("mySpots/modal")}
        title="Present modal"
      />
    </View>
  );
}
