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
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import * as ImagePicker from "expo-image-picker";
import { DropDown } from "../../components/DropDown";
import { DifficultyLabel, LargeDifficultyLabel } from "../../components/Labels";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const POSTGRESS_URL = process.env.EXPO_PUBLIC_POSTGRESS_URL;

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
  const [images, setImages] = useState([]);

  const pickImages = async () => {
    if (images.length >= 5) return; // Check if the limit is reached
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      selectionLimit: 5 - images.length, // Limit to remaining image slots
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prevImages) => [
        ...prevImages,
        ...result.assets.map((asset) => asset.uri),
      ]);
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
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

  const postForm = async () => {
    const response = await fetch(POSTGRESS_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination: destination,
        address: location,
        difficulty_Level: difficultyLevel,
        surf_Break: [surfBreak],
        photos: [
          {
            url: "https://www.goodfreephotos.com/albums/sports/man-surfing-a-wave-at-sunset.jpg",
          },
        ],
        peak_Surf_Season_Begins: seasonStart,
        peak_Surf_Season_Ends: seasonEnd,
        GPS: "28°02'11.8\"S 153°26'13.1\"E",
        description: description,
      }),
    });
    const data = await response.json();
    console.log(data);

    router.back();
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
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ width: "100%" }}>
        <ScrollView style={{ paddingTop: 20 }}>
          <View style={styles.innerContainer}>
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
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContainer}
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
                <LargeDifficultyLabel difficulty={level.value} />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.innerContainer}>
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
                  isIndex={true}
                  setSelectedItem={setSeasonStart}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.inputLabel}>Season End</Text>
                <DropDown
                  list={seasonEndOptions}
                  title="Season End"
                  isIndex={true}
                  setSelectedItem={setSeasonEnd}
                />
              </View>
            </View>
            <Text style={styles.inputLabel}>Add images</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalContainer}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={pickImages}
              style={[
                styles.uploadImagesButton,
                images.length >= 5 && styles.disabledButton,
              ]}
              disabled={images.length >= 5}
            >
              <MaterialIcons
                name={images.length >= 5 ? "block" : "add-photo-alternate"}
                size={40}
                color="#C5C5C5"
              />
              <Text style={styles.counterText}>{images.length}/5</Text>
            </TouchableOpacity>
            {images.map((image, index) => (
              <View key={index} style={styles.imageContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => removeImage(index)}
                  style={styles.deleteButton}
                >
                  <MaterialIcons name="cancel" size={24} color="#C5C5C5" />
                </TouchableOpacity>
                <Image source={{ uri: image }} style={styles.uploadedImage} />
              </View>
            ))}
          </ScrollView>
          <View style={{ marginBottom: 20 }}>
            <Button title="Submit" onPress={postForm} />
          </View>
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
  innerContainer: {
    paddingHorizontal: 20,
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
  horizontalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
    paddingHorizontal: 20,
  },
  difficultyOption: {
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    // paddingRight: 10,
  },
  difficultyText: {
    fontSize: 16,
  },
  uploadImagesButton: {
    height: 120,
    width: 120,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    borderStyle: "dashed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.5,
  },
  counterText: {
    marginTop: 5,
    color: "#C5C5C5",
    fontSize: 14,
  },
  uploadedImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#E0E0E0",
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
  imageContainer: {
    position: "relative",
  },
});
