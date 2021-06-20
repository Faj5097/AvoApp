import React from "react";
import { View, Text, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";

const StoreTitle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.storeContainer}>
        <Text style={styles.store}>{props.store.toUpperCase() + " /"}</Text>
      </View>
      <View style={styles.companyContainer}>
        <DefaultText>{props.company}</DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  storeContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 10,
    marginBottom: 10
  },
  store: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "roboto-black"
  },
  companyContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 14
  },
  company: {
    fontSize: 15
  }
});

export default StoreTitle;
