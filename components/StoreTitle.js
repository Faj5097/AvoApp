import React from "react";
import { View, Text, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";

const StoreTitle = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.storeContainer}>
        {/* <Text style={styles.store}>{props.store.toUpperCase() + " /"}</Text> */}
        <Text style={styles.store}>{props.store.toUpperCase()}</Text>
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
    marginLeft: 10
    // flexDirection: "row"
  },
  storeContainer: {
    flex: 5
  },
  store: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "roboto-black"
  },
  companyContainer: {
    flex: 4
  },
  company: {
    fontSize: 15
  }
});

export default StoreTitle;
