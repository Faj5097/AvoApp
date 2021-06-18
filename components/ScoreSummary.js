import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import StoreTitle from "./StoreTitle";
import PersonalRating from "./PersonalRating";

import { AVOCADOS } from "../data/dummy-data";

const ScoreSummary = (props) => {
  const avocado = AVOCADOS.find((meal) => meal.id === "A1");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.storeContainer}>
          <StoreTitle store={avocado.store} company={avocado.company} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-heart-outline" size={30} color="black" />
          <Ionicons name="ios-add-circle-outline" size={30} color="black" />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1581264378232-a55a770b9b83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 10,
            resizeMode: "cover",
            overflow: "hidden",
            flexDirection: "row"
          }}
        >
          <View style={styles.imageLeftOverlay}></View>
          <View style={styles.imageRightOverlay}>
            <View style={styles.ecoScoreContainer}></View>
            <View style={styles.comRankContainer}>
              <View style={styles.comRankValueContainer}>
                <Text style={{ fontWeight: "bold", fontSize: 35 }}>
                  {avocado.ecoComRank}
                </Text>
              </View>
              <View style={styles.comRankStarsContainer}>
                <Ionicons name="ios-star-outline" size={12} color="black" />
                <Ionicons name="ios-star-outline" size={12} color="black" />
                <Ionicons name="ios-star-outline" size={12} color="black" />
                <Ionicons name="ios-star-outline" size={12} color="black" />
                <Ionicons name="ios-star-outline" size={12} color="black" />
              </View>
              <View style={styles.comRankDescContainer}>
                <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                  {"Community " + "\n" + "Rating"}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.ratingContainer}>
        <PersonalRating />
      </View>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  headerContainer: {
    flex: 4,
    flexDirection: "row",
    width: "90%"
  },
  imageContainer: {
    flex: 15,
    alignItems: "center",
    width: "90%"
  },
  imageLeftOverlay: {
    flex: 2
  },
  imageRightOverlay: {
    borderRadius: 10,
    backgroundColor: "yellow",
    opacity: 0.7,
    flex: 1,
    alignItems: "center"
  },
  ecoScoreContainer: {
    width: "90%",
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  comRankContainer: {
    width: "90%",
    flex: 1
  },
  comRankValueContainer: {
    flex: 5,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  comRankStarsContainer: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  comRankDescContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  ratingContainer: {
    flex: 3
  },
  storeContainer: {
    flex: 3,
    marginBottom: 5
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});

export default ScoreSummary;
