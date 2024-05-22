import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";
import { FloatingButton } from "../../components/FloatingButton";

export default function MySpots() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Add spots and see them here</Text>
      <FloatingButton
        icon={"add"}
        text="Add spot"
        onPress={() => router.push("mySpots/modal")}
      />
    </View>
  );
}
