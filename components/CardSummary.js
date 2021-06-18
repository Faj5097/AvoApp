import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AVOCADOS } from "../data/dummy-data";

const CardSummary = (props) => {
  const avocado = AVOCADOS.find((meal) => meal.id === "A1");

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text>Eco Score</Text>
        <Ionicons name="information-circle-outline" size={18} color="black" />
      </View>
      <View style={styles.component}>
        <View style={styles.icon}>
          <Ionicons name="ios-location-outline" size={24} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={{ fontSize: 12 }}>Country of Origin:</Text>
            <Text style={{ fontSize: 18 }}>{avocado.origin}</Text>
          </View>
        </View>
        <View style={styles.status}>
          <Feather name="circle" size={15} color="white" />
        </View>
      </View>
      <View style={styles.component}>
        <View style={styles.icon}>
          <Feather name="cloud" size={24} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={{ fontSize: 12 }}>Gas emissions:</Text>
            <Text style={{ fontSize: 18 }}>{avocado.emissions}g CO²</Text>
          </View>
        </View>
        <View style={styles.status}>
          <Feather name="circle" size={15} color="white" />
        </View>
      </View>
      <View style={styles.component}>
        <View style={styles.icon}>
          <Ionicons name="leaf-outline" size={24} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={{ fontSize: 12 }}>Farming conditions:</Text>
            <Text style={{ fontSize: 18 }}>{avocado.farming}</Text>
          </View>
        </View>
        <View style={styles.status}>
          <Feather name="circle" size={15} color="white" />
        </View>
      </View>
      <View style={styles.footer}>
        <Text
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontSize: 10
          }}
        >
          More Information{" "}
        </Text>
        <Ionicons
          name="ios-chevron-forward"
          size={13}
          color="black"
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            props.navigation.navigate({
              routeName: "AvoDetail"
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerRow: {
    flexDirection: "row",
    flex: 3,
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: "center"
  },
  component: {
    flexDirection: "row",
    flex: 5,
    margin: 5
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  infoContainer: {
    flex: 8,
    justifyContent: "center"
  },
  infoItem: {
    marginLeft: 15
  },
  status: {
    flex: 2,
    justifyContent: "center"
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
    marginRight: 15
  }
});

export default CardSummary;
