import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: Colors.grayGreen,
    borderWidth: 1,
    borderRadius: 20,
    width: "90%",
    height: 200,
    backgroundColor: Colors.lightGreen,
    elevation: 5,
    marginVertical: 5
  }
});

export default Card;
