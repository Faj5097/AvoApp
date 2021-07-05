import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import DefaultText from "./DefaultText";
import Colors from "../constants/colors";

const PersonalRating = (props) => {
  const [persRank, setPersRank] = useState(0);

  const showRankingAlert = () =>
    Alert.alert(
      "Ranking Information",
      "This is a detailed ranking information",
      [
        {
          text: "OK",
          style: "default"
        }
      ],
      {
        cancelable: true
      }
    );

  return (
    <View style={styles.container}>
      <View style={styles.rateText}>
        <DefaultText>Rate Avo</DefaultText>
      </View>
      <View style={styles.starsContainer}>
        <Ionicons
          name={persRank >= 1 ? "ios-star-sharp" : "ios-star-outline"}
          size={20}
          color={Colors.brightGren}
          onPress={() => setPersRank(1)}
        />
        <Ionicons
          name={persRank >= 2 ? "ios-star-sharp" : "ios-star-outline"}
          size={20}
          color={Colors.brightGren}
          onPress={() => setPersRank(2)}
        />
        <Ionicons
          name={persRank >= 3 ? "ios-star-sharp" : "ios-star-outline"}
          size={20}
          color={Colors.brightGren}
          onPress={() => setPersRank(3)}
        />
        <Ionicons
          name={persRank >= 4 ? "ios-star-sharp" : "ios-star-outline"}
          size={20}
          color={Colors.brightGren}
          onPress={() => setPersRank(4)}
        />
        <Ionicons
          name={persRank >= 5 ? "ios-star-sharp" : "ios-star-outline"}
          size={20}
          color={Colors.brightGren}
          onPress={() => setPersRank(5)}
        />
      </View>
      <View style={styles.infoContainer}>
        <Ionicons
          name="ios-information-circle-outline"
          size={20}
          color="black"
          onPress={showRankingAlert}
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
    marginRight: 15
  }
});

export default PersonalRating;
