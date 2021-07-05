import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const dimensions = Dimensions.get("window");
const imageHeight = dimensions.height * 0.8;
const imageWidth = dimensions.width;

const StatsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Image
        resizeMode="stretch"
        source={require("../assets/images/Stats.png")}
        style={{ height: imageHeight, width: imageWidth }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center"
    backgroundColor: "white"
  }
});

export default StatsScreen;
