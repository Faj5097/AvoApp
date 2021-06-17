import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Card from "../components/Card";
import CardSummary from "../components/CardSummary";

const AvoScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.rating}></View>
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
    flex: 55
  },
  score: {
    flex: 45,
    borderTopColor: "lightgrey",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AvoScreen;
