import { Redirect } from "expo-router";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return <Redirect href="(tabs)/home" />;
  // return (
  //   <View style={Styles.container}>
  //     <Text>Maree-Haute</Text>
  //   </View>
  // );
}

const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
