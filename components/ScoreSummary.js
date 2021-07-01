import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import Colors from "../constants/colors";
import DefaultText from "./DefaultText";
import StoreTitle from "./StoreTitle";
import PersonalRating from "./PersonalRating";

import { AVOCADOS } from "../data/dummy-data";

const ScoreSummary = (props) => {
  const [avoAddedStats, setAvoAddedStats] = React.useState(false);
  const [avoAddedFavorites, setAvoAddedFavorites] = React.useState(false);

  const avocado = AVOCADOS.find((meal) => meal.id === props.avoId);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.storeContainer}>
          <StoreTitle store={avocado.store} company={avocado.company} />
        </View>
        <View style={styles.iconContainer}>
          <Ionicons
            name={avoAddedFavorites ? "ios-heart-sharp" : "ios-heart-outline"}
            size={30}
            color={Colors.brightGren}
            onPress={() => {
              setAvoAddedFavorites(!avoAddedFavorites);
              props.showModalFavorites(!avoAddedFavorites);
            }}
          />
          <Ionicons
            name={avoAddedStats ? "ios-checkmark" : "ios-add-circle-outline"}
            size={30}
            color={Colors.brightGren}
            onPress={() => {
              setAvoAddedStats(!avoAddedStats);
              props.showModalStats(!avoAddedStats);
            }}
          />
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
            <View style={styles.ecoScoreContainer}>
              <View style={styles.ecoScoreChart}>
                <AnimatedCircularProgress
                  size={80}
                  width={12}
                  fill={avocado.ecoScore}
                  rotation={0}
                  tintColor={Colors.scoreOrange}
                >
                  {() => (
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        opacity: 1
                      }}
                    >
                      <DefaultText
                        style={{
                          fontSize: 18,
                          fontWeight: "bold"
                        }}
                      >
                        {avocado.ecoScore}%
                      </DefaultText>
                    </View>
                  )}
                </AnimatedCircularProgress>
              </View>
              <View style={styles.ecoScoreSubtitle}>
                <DefaultText>Eco Score</DefaultText>
              </View>
            </View>
            <View style={styles.comRankContainer}>
              <View style={styles.comRankValueContainer}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 35
                  }}
                >
                  {avocado.ecoComRank}
                </Text>
              </View>
              <View style={styles.comRankStarsContainer}>
                <Ionicons
                  name={
                    avocado.ecoComRank >= 1
                      ? "ios-star-sharp"
                      : "ios-star-outline"
                  }
                  size={12}
                  color={Colors.brightGren}
                />
                <Ionicons
                  name={
                    avocado.ecoComRank >= 2
                      ? "ios-star-sharp"
                      : "ios-star-outline"
                  }
                  size={12}
                  color={Colors.brightGren}
                />
                <Ionicons
                  name={
                    avocado.ecoComRank >= 3
                      ? "ios-star-sharp"
                      : "ios-star-outline"
                  }
                  size={12}
                  color={Colors.brightGren}
                />
                <Ionicons
                  name={
                    avocado.ecoComRank >= 4
                      ? "ios-star-sharp"
                      : "ios-star-outline"
                  }
                  size={12}
                  color={Colors.brightGren}
                />
                <Ionicons
                  name={
                    avocado.ecoComRank >= 5
                      ? "ios-star-sharp"
                      : "ios-star-outline"
                  }
                  size={12}
                  color={Colors.brightGren}
                />
              </View>
              <View style={styles.comRankDescContainer}>
                <DefaultText
                  style={{ textAlign: "center", fontWeight: "bold" }}
                >
                  {"Community " + "\n" + "Rating"}
                </DefaultText>
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
    alignItems: "center",
    backgroundColor: Colors.lightYellow
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
    backgroundColor: "#ffb266cc",
    opacity: 1,
    flex: 1,
    alignItems: "center"
  },
  ecoScoreContainer: {
    width: "90%",
    flex: 1,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10
  },
  ecoScoreChart: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center"
  },
  ecoScoreSubtitle: {
    flex: 1
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
