import { View, Text, Button, StyleSheet } from "react-native";

export default function SavedList({ name, onPress, spotsIds }) {
  return (
    <View style={{ backgroundColor: "red" }}>
      <Text>{name}</Text>
      <Text>{spotsIds}</Text>
      <Button title="View" onPress={onPress} />
    </View>
  );
}
