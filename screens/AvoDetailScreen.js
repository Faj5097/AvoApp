import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardDetailInfo from "../components/CardDetailInfo";
import Card from "../components/Card";

const AvoDetailScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Card style={{ height: 150 }}>
        <CardDetailInfo />
      </Card>
      <Card style={{ height: 150 }}>
        <CardDetailInfo />
      </Card>
      <Card style={{ height: 150 }}>
        <CardDetailInfo />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default AvoDetailScreen;
