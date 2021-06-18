import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PersonalRating = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rateText}>
        <Text>Rate Avo</Text>
      </View>
      <View style={styles.starsContainer}>
        <Ionicons name="ios-star-outline" size={20} color="black" />
        <Ionicons name="ios-star-outline" size={20} color="black" />
        <Ionicons name="ios-star-outline" size={20} color="black" />
        <Ionicons name="ios-star-outline" size={20} color="black" />
        <Ionicons name="ios-star-outline" size={20} color="black" />
      </View>
      <View style={styles.infoContainer}>
        <Ionicons
          name="ios-information-circle-outline"
          size={24}
          color="black"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    width: "90%",
    alignItems: "center"
  },
  rateText: {
    flex: 2
  },
  starsContainer: {
    flex: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  infoContainer: {
    flex: 2,
    alignItems: "flex-end",
    marginRight: 5
  }
});

export default PersonalRating;
