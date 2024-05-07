import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [coordinate, setCoordinate] = useState(null);

  const handleMapPress = (event) => {
    const { coordinate } = event.nativeEvent;
    setCoordinate(coordinate);
  };

  return (
    <View style={styles.container}>
      {/* <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.214052,
          longitude: -1.543507,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        {coordinate && (
          <Marker coordinate={coordinate} title="Selected Location" />
        )}
      </MapView>
      {coordinate && (
        <View style={styles.marker}>
          <Text>Latitude: {coordinate.latitude}</Text>
          <Text>Longitude: {coordinate.longitude}</Text>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    zIndex: 1000,
  },
});
