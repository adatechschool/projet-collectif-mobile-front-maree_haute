import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  InputModeOptions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import { DropDown } from "../../components/DropDown";
import { DifficultyLabel } from "../../components/Labels";

const TOKEN = process.env.EXPO_PUBLIC_TOKEN2_AIRTABLE;
const AIRTABLE_URL = process.env.EXPO_PUBLIC_AIRTABLE_URL;
const Airtable = require("airtable");
var base = new Airtable({ apiKey: TOKEN }).base("appfYZhtggrzhPbaz");

export default function Modal() {
  // Define state variables to hold form data
  const [destination, setDestination] = useState("");
  const [location, setLocation] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState(null);

  const [surfBreak, setSurfBreak] = useState("");
  const [description, setDescription] = useState("");
  const [seasonStart, setSeasonStart] = useState("");
  const [seasonEnd, setSeasonEnd] = useState("");

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const difficultyLevels = [
    { label: "Novice", value: 1 },
    { label: "Beginner", value: 2 },
    { label: "Proficient", value: 3 },
    { label: "Advanced", value: 4 },
    { label: "Expert", value: 5 },
  ];

  const handleDifficultySelect = (value) => {
    setDifficultyLevel(value);
    // console.log("Selected difficulty:", value);
  };

  const surfBreakOptions = [
    "Reef Break",
    "Point Break",
    "Outer Banks",
    "Beach Break",
  ];

  const seasonStartOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const seasonEndOptions = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Handle form submission
  const handleSubmit = () => {
    console.log({
      destination,
      location,
      difficultyLevel,
      surfBreak,
      description,
      image,
      seasonStart,
      seasonEnd,
    });

    base("Surf Destinations").create(
      [
        {
          fields: {
            Destination: destination,
            "Destination State/Country": location,
            "Difficulty Level": difficultyLevel,
            "Surf Break": [surfBreak],
            Photos: [
              {
                url: "",
              },
            ],
            "Peak Surf Season Begins": `01/${seasonStart}/2024`,
            "Peak Surf Season Ends": `01/${seasonEnd}/2024`,
            "Magic Seaweed Link": "",
            Influencers: [],
            Geocode: "",
            Description: description,
          },
        },
      ],
      function (err, records) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ width: "100%" }}>
        <ScrollView style={{ padding: 25 }}>
          <Text style={styles.inputLabel}>Destination name</Text>
          <TextInput
            style={styles.input}
            placeholder="Destination"
            value={destination}
            onChangeText={setDestination}
          />
          <Text style={styles.inputLabel}>Description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
          />
          <Text style={styles.inputLabel}>Difficulty</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.difficultyContainer}
          >
            {difficultyLevels.map((level) => (
              <TouchableOpacity
                key={level.label}
                style={[
                  styles.difficultyOption,
                  { opacity: difficultyLevel === level.value ? 1 : 0.4 },
                ]}
                onPress={() => handleDifficultySelect(level.value)}
              >
                {/* Render the DifficultyLabel component */}
                <DifficultyLabel difficulty={level.value} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.inputLabel}>Surf Break</Text>
          <DropDown
            list={surfBreakOptions}
            title="Surf Break"
            isIndex={false}
            setSelectedItem={setSurfBreak}
          />
          <Text style={styles.inputLabel}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Search address"
            value={location}
            onChangeText={setLocation}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Season Start</Text>
              <DropDown
                list={seasonStartOptions}
                title="Season Start"
                isIndex={false}
                setSelectedItem={setSeasonStart}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.inputLabel}>Season End</Text>
              <DropDown
                list={seasonEndOptions}
                title="Season End"
                isIndex={false}
                setSelectedItem={setSeasonEnd}
              />
            </View>
          </View>

          <View>
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && <Image source={{ uri: image }} style={styles.image} />}
          </View>

          <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 10,
    // paddingHorizontal: 25,
  },
  input: {
    height: 40,
    width: "100%",
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    height: 120,
    width: "100%",
    fontSize: 18,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  difficultyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  difficultyOption: {
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    paddingRight: 10,
  },
  difficultyText: {
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
});
