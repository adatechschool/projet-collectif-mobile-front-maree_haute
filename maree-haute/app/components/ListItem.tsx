import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

interface Props {
  imageURL: string;
  destination: string;
  destinationCountry: string;
  difficulty: string;
  startSeason: string;
  endSeason: string;
  description: string;
  onPress?: () => void;
}

export default function ListItem({
  imageURL,
  destination,
  destinationCountry,
  difficulty,
  startSeason,
  endSeason,
  description,
  onPress,
}: Props) {
  const formatMonth = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("default", { month: "short" });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.backgroundImageContainer}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: imageURL,
          }}
          resizeMode="cover" // This ensures that the image covers the entire area of the container
        />
      </View>
      <View style={styles.card}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitleText}>{destination}</Text>
          <View style={styles.cardSubText}>
            <Text style={styles.cardHeadlineText}>{destinationCountry}</Text>
            <Text style={styles.cardHeadlineText}>
              {formatMonth(startSeason)} - {formatMonth(endSeason)}
            </Text>
          </View>
          <Text style={styles.CardDescriptionText}>
            {description.split(" ").slice(0, 5).join(" ")}...
          </Text>
          {/* <Text>{difficulty}</Text> */}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    backgroundColor: "white",
    padding: 5,
    justifyContent: "flex-end",
    borderRadius: 20,
    overflow: "hidden",
  },
  backgroundImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  card: {
    // width: "100%",
    backgroundColor: "#FCFCFC",
    padding: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  cardText: {
    display: "flex",
    paddingLeft: 5,
    paddingRight: 5,
    gap: 5,
  },
  cardSubText: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  cardTitleText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  cardHeadlineText: {
    fontSize: 18,
  },
  CardDescriptionText: {
    fontSize: 17,
  },
});
