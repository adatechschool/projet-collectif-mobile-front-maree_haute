import { Redirect } from "expo-router";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DifficultyLabel, LargeDifficultyLabel } from "./components/Labels";

export default function Index() {
  return <Redirect href="(tabs)/home" />;
  // return (
  // <View style={Styles.container}>
  //   <ScrollView
  //     horizontal
  //     showsHorizontalScrollIndicator={false}
  //     contentContainerStyle={Styles.horizontalContainer}
  //   >
  //     {/* <DifficultyLabel difficulty={4} /> */}
  //     <LargeDifficultyLabel difficulty={1} />
  //     <LargeDifficultyLabel difficulty={2} />
  //     <LargeDifficultyLabel difficulty={3} />
  //     <LargeDifficultyLabel difficulty={4} />
  //     <LargeDifficultyLabel difficulty={5} />
  //   </ScrollView>
  // </View>
  // );
}

const Styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    gap: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
});
