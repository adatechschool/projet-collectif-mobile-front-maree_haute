import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function UpgradeScreen() {
  const data = [
    { feature: "View all spots", free: "yes", pro: "yes" },
    { feature: "Save your favorite spots", free: "yes", pro: "yes" },
    { feature: "Create lists", free: "yes", pro: "yes" },
    { feature: "Basic filters", free: "yes", pro: "yes" },
    { feature: "Advanced filters", free: "no", pro: "yes" },
    { feature: "Advanced search", free: "no", pro: "yes" },
    { feature: "Map view", free: "no", pro: "yes" },
    { feature: "Current weather", free: "no", pro: "yes" },
    { feature: "Coaching tips", free: "no", pro: "yes" },
    { feature: "Surfing buddy", free: "no", pro: "yes" },
    { feature: "Love and attention", free: "no", pro: "yes" },
    { feature: "Happiness", free: "no", pro: "yes" },
    { feature: "A reason to get up in the mornings", free: "no", pro: "yes" },
  ];

  const renderIcon = (value) => {
    return value === "yes" ? (
      <MaterialIcons name="check" size={24} color="green" />
    ) : (
      <MaterialIcons name="close" size={24} color="red" />
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>High Tide</Text>
        <View
          style={{
            backgroundColor: "#FFBA18",
            height: 35,
            paddingHorizontal: 15,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>PRO</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <Text
          style={[
            styles.tableCell,
            styles.feateredHeaderCell,
            styles.featureCell,
          ]}
        >
          What's included
        </Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Free</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Pro</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={styles.table}>
          {data.map((row, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.tableCell, styles.featureCell]}>
                {row.feature}
              </Text>
              <View style={styles.tableCell}>{renderIcon(row.free)}</View>
              <View style={styles.tableCell}>{renderIcon(row.pro)}</View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.9}
        style={{
          width: "100%",
          // height: 40,
          backgroundColor: "#5EB1EF",
          position: "absolute",
          bottom: 20,
          alignSelf: "center",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          padding: 10,
          borderRadius: 50,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
          Start Free Trial
        </Text>
        <Text style={{ color: "white", fontSize: 15, opacity: 0.9 }}>
          7 days free, then €129.99 monthly
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // backgroundColor: "orange",
  },
  table: {
    // margin: 10,
    // borderWidth: 1,
    // borderColor: "#000",
    // backgroundColor: "pink",
    marginBottom: 90,
  },
  tableRow: {
    flexDirection: "row",
    // borderBottomWidth: 1,
    // borderColor: "#000",
  },
  featureCell: {
    flex: 3, // Make the feature cell take up more space
    fontSize: 18,
  },
  tableCell: {
    flex: 1,
    paddingVertical: 10,
    // borderRightWidth: 1,
    // borderColor: "#000",
    // textAlign: "center",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  feateredHeaderCell: {
    fontWeight: "bold",
    // backgroundColor: "orange",
    fontSize: 18,
    // marginBottom: 10,
  },
  headerCell: {
    fontWeight: "bold",
    // backgroundColor: "orange",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
});
