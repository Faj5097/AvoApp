import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "darkgrey",
    borderWidth: 1,
    borderRadius: 15,
    width: "80%",
    height: 200,
    backgroundColor: "lightgrey",
    elevation: 5,
    marginVertical: 5
  }
});

export default Card;
