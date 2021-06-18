import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "../components/Card";
import CardSummary from "../components/CardSummary";
import ScoreSummary from "../components/ScoreSummary";

const AvoScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.rating}>
        <ScoreSummary />
      </View>
      <View style={styles.score}>
        <Card>
          <CardSummary navigation={props.navigation} />
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white"
  },
  rating: {
    flex: 60
  },
  score: {
    flex: 40,
    borderTopColor: "lightgrey",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AvoScreen;
