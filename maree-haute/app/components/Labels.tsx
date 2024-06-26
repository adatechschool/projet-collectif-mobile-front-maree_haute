import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function DifficultyLabel({ difficulty }) {
  // Map difficulty level to text and color
  const difficultyMap = {
    1: {
      text: "Novice",
      containerColor: "#CEA37E",
      innerContainerColor: "#AD7F58",
      textColor: "#E5CBB5",
      textShadowColor: "#815E46",
    },
    2: {
      text: "Beginner",
      containerColor: "#E0E1E6",
      innerContainerColor: "#BCBBB5",
      textColor: "#F9F9F9",
      textShadowColor: "#80838D",
    },
    3: {
      text: "Proficient",
      containerColor: "#FFC53D",
      innerContainerColor: "#E2A336",
      textColor: "#FFE6AA",
      textShadowColor: "#AB6400",
    },
    4: {
      text: "Advanced",
      containerColor: "#E592A3",
      innerContainerColor: "#E54666",
      textColor: "#FEDFE5",
      textShadowColor: "#B92348",
    },
    5: {
      text: "Expert",
      containerColor: "#5EB1EF",
      innerContainerColor: "#018CF7",
      textColor: "#C0E4FF",
      textShadowColor: "#0D74CE",
    },
  };

  // Check if the difficulty level exists in the map
  const difficultyInfo = difficultyMap[difficulty] || {
    text: "Unknown",
    color: "#000",
  };

  return (
    <View
      style={{
        display: "flex",
        maxWidth: "100%",
        height: 30,
        paddingTop: 4,
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: difficultyInfo.containerColor,
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          alignSelf: "stretch",
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 7,
          backgroundColor: difficultyInfo.innerContainerColor,
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: difficultyInfo.textColor,
            textShadowColor: difficultyInfo.textShadowColor,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 0,
          }}
        >
          {difficultyInfo.text}
        </Text>
      </View>
      <View
        style={{
          width: 9,
          height: 83,
          transform: [{ rotate: "-60deg" }],
          position: "absolute",
          right: 10,
          top: -28,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
      />
    </View>
  );
}

export function LargeDifficultyLabel({ difficulty }) {
  // Map difficulty level to text and color
  const difficultyMap = {
    1: {
      text: "Novice",
      containerColor: "#CEA37E",
      innerContainerColor: "#AD7F58",
      textColor: "#E5CBB5",
      textShadowColor: "#815E46",
      icon: "support",
    },
    2: {
      text: "Beginner",
      containerColor: "#E0E1E6",
      innerContainerColor: "#BCBBB5",
      textColor: "#F9F9F9",
      textShadowColor: "#80838D",
      icon: "waves",
    },
    3: {
      text: "Proficient",
      containerColor: "#FFC53D",
      innerContainerColor: "#E2A336",
      textColor: "#FFE6AA",
      textShadowColor: "#AB6400",
      icon: "beach-access",
    },
    4: {
      text: "Advanced",
      containerColor: "#E592A3",
      innerContainerColor: "#E54666",
      textColor: "#FEDFE5",
      textShadowColor: "#B92348",
      icon: "tsunami",
    },
    5: {
      text: "Expert",
      containerColor: "#5EB1EF",
      innerContainerColor: "#018CF7",
      textColor: "#C0E4FF",
      textShadowColor: "#0D74CE",
      icon: "surfing",
    },
  };

  // Check if the difficulty level exists in the map
  const difficultyInfo = difficultyMap[difficulty] || {
    text: "Unknown",
    color: "#000",
  };

  return (
    <View
      style={{
        display: "flex",
        // maxWidth: "100%",
        width: 150,
        height: 200,
        padding: 5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        overflow: "hidden",
        backgroundColor: difficultyInfo.containerColor,
      }}
    >
      <View
        style={{
          display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          flex: 1,
          alignSelf: "stretch",
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 17,
          backgroundColor: difficultyInfo.innerContainerColor,
          overflow: "hidden",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            padding: 10,
            color: difficultyInfo.textColor,
            textShadowColor: difficultyInfo.textShadowColor,
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 0,
          }}
        >
          {difficultyInfo.text}
        </Text>
        <MaterialIcons
          name={difficultyInfo.icon}
          size={130}
          color={difficultyInfo.textShadowColor}
          style={{
            position: "absolute",
            bottom: -30,
            right: -20,
            opacity: 0.3,
          }}
        />
      </View>
      <View
        style={{
          width: 10,
          height: 90,
          transform: [{ rotate: "-60deg" }],
          position: "absolute",
          right: 20,
          top: -30,
          // backgroundColor: "rgba(255, 255, 255, 0.15)",
          backgroundColor: "white",
          opacity: 0.13,
        }}
      />
      <View
        style={{
          width: 6,
          height: 150,
          transform: [{ rotate: "-60deg" }],
          position: "absolute",
          right: 30,
          top: -47,
          // backgroundColor: "rgba(255, 255, 255, 0.15)",
          backgroundColor: "white",
          opacity: 0.07,
        }}
      />
    </View>
  );
}

export function DifficultyLabelBlueprint() {
  return (
    <View style={styles.difficultyLabelContainer}>
      <View style={styles.difficultyLabelInnerContainer}>
        <Text style={styles.difficultyLabelText}>Novice</Text>
      </View>
      <View style={styles.difficultyLabelShine} />
    </View>
  );
}

const styles = StyleSheet.create({
  difficultyLabelContainer: {
    display: "flex",
    width: 70,
    height: 30,
    paddingTop: 4,
    paddingRight: 4,
    paddingLeft: 4,
    paddingBottom: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#CEA37E",
    shadowColor: "#815E46",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  difficultyLabelInnerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 7,
    backgroundColor: "#AD7F58",
  },
  difficultyLabelText: {
    fontSize: 13,
    // fontWeight: "bold",
    color: "#E5CBB5",
    textShadowColor: "#815E46", // Shadow color
    textShadowOffset: { width: 1, height: 1 }, // No offset (centered shadow)
    textShadowRadius: 0, // Spread of the shadow
  },
  difficultyLabelShine: {
    width: 9,
    height: 83,
    transform: [{ rotate: "-60deg" }],
    position: "absolute",
    right: 10,
    top: -28,
    backgroundColor: "rgba(255, 255, 255, 0.10)",
  },
});

export function SurfBreakLabel({ surfBreak }: { surfBreak: string }) {
  return (
    <View
      style={{
        display: "flex",
        height: 30,
        paddingTop: 4,
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#3DB9CE",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          alignSelf: "stretch",
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 7,
          backgroundColor: "#117D98",
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: "#9DDDE7",
            textShadowColor: "#5F868D",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 0,
          }}
        >
          {surfBreak}
        </Text>
      </View>
      <View
        style={{
          width: 9,
          height: 83,
          transform: [{ rotate: "-60deg" }],
          position: "absolute",
          right: 10,
          top: -28,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
      />
    </View>
  );
}

export function SeasonLabel({ season }: { season: string }) {
  return (
    <View
      style={{
        display: "flex",
        height: 30,
        paddingTop: 4,
        paddingRight: 4,
        paddingLeft: 4,
        paddingBottom: 4,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#BCBBB5",
      }}
    >
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          alignSelf: "stretch",
          paddingLeft: 5,
          paddingRight: 5,
          borderRadius: 7,
          backgroundColor: "#63635E",
        }}
      >
        <Text
          style={{
            fontSize: 13,
            color: "#E9E8E6",
            textShadowColor: "#AEADAA",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 0,
          }}
        >
          {season}
        </Text>
      </View>
      <View
        style={{
          width: 9,
          height: 83,
          transform: [{ rotate: "-60deg" }],
          position: "absolute",
          right: 10,
          top: -28,
          backgroundColor: "rgba(255, 255, 255, 0.15)",
        }}
      />
    </View>
  );
}
