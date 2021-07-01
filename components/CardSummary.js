import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AVOCADOS } from "../data/dummy-data";
import DefaultText from "./DefaultText";

const CardSummary = (props) => {
  const avocado = AVOCADOS.find((meal) => meal.id === props.avoId);

  const getColor = (color) => {
    switch (color) {
      case "scoreRed":
        return "#e85838";
      case "scoreOrange":
        return "#FFC759";
      case "scoreGreen":
        return "#39BA5D";
      default:
        return "white";
    }
  };

  const showEcoScoreAlert = () =>
    Alert.alert(
      "Eco Score Information",
      "This is a detailed eco score alert",
      [
        {
          text: "OK",
          style: "default"
        }
      ],
      {
        cancelable: true
      }
    );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text>Eco Score</Text>
        <Ionicons
          name="information-circle-outline"
          size={18}
          color="black"
          onPress={showEcoScoreAlert}
        />
      </View>
      <View style={styles.component}>
        <View style={styles.icon}>
          <Ionicons name="ios-location-outline" size={24} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <DefaultText style={{ fontSize: 12 }}>
              Country of Origin:
            </DefaultText>
            <Text style={{ fontSize: 18 }}>{avocado.origin}</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: getColor(avocado.originLight)
            }}
          ></View>
        </View>
      </View>
      <View style={styles.component}>
        <View style={styles.icon}>
          <Feather name="cloud" size={24} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <DefaultText style={{ fontSize: 12 }}>Gas emissions:</DefaultText>
            <Text style={{ fontSize: 18 }}>{avocado.emissions}g CO²</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: getColor(avocado.emissionsLight)
            }}
          ></View>
        </View>
      </View>
      <View style={styles.component}>
        <View style={styles.icon}>
          <Ionicons name="leaf-outline" size={24} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <DefaultText style={{ fontSize: 12 }}>
              Farming conditions:
            </DefaultText>
            <Text style={{ fontSize: 18 }}>{avocado.farming}</Text>
          </View>
        </View>
        <View style={styles.status}>
          <View
            style={{
              ...styles.circle,
              backgroundColor: getColor(avocado.farmingLight)
            }}
          ></View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => {
          props.navigation.navigate({
            routeName: "AvoDetail",
            params: {
              avoId: props.avoId
            }
          });
        }}
      >
        <DefaultText
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontSize: 10
          }}
        >
          More Information{" "}
        </DefaultText>
        <Ionicons
          name="ios-chevron-forward"
          size={13}
          color="black"
          style={{ alignItems: "center", justifyContent: "center" }}
        />
      </TouchableOpacity>
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
  circle: {
    justifyContent: "flex-start",
    width: 16,
    height: 16,
    borderRadius: 8,
    borderColor: "white",
    borderWidth: 2
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
