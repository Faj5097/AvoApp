import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const StatsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        resizeMode="stretch"
        source={require("../assets/images/Stats.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default StatsScreen;
