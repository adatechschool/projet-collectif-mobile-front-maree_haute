import { View, Text, Button } from "react-native";
import { Link, router } from "expo-router";
import { FloatingButton } from "../../components/FloatingButton";

export default function SavedTab() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Saved tab</Text>
      <FloatingButton
        icon={"add"}
        text="New list"
        onPress={() => router.push("saved/listModal")}
      />
    </View>
  );
}
