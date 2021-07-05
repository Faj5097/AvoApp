import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

import DefaultText from "../components/DefaultText";

function getImgSource(imgDesc) {
  switch (imgDesc) {
    case "A1_Farming":
      return require("../assets/images/Farming_A1.png");
    case "A1_Emission":
      return require("../assets/images/Emission_A1.png");
    case "A1_Origin":
      return require("../assets/images/Origin_A1.png");
    default:
      return require("../assets/images/Origin_A1.png");
  }
}

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

const CardDetailInfo = (props) => {
  let imgSource = getImgSource(props.imgDesc);

  return (
    <View style={styles.detailInfo}>
      <View style={styles.left}>
        <View style={styles.leftHeading}>
          <Text>{props.leftTitle}</Text>
        </View>
        <View style={styles.leftContent}>
          <Image resizeMode="contain" source={imgSource} />
        </View>
      </View>
      <View style={styles.middle}>
        <View>
          <Text style={styles.middleHeading}>{props.middleTitle}</Text>
        </View>
        <View style={styles.middleContent}>
          {props.description.map((desc) => {
            return (
              <DefaultText key={desc} style={styles.middleContentText}>
                {"\u2022"} {desc}
              </DefaultText>
            );
          })}
        </View>
      </View>
      <View style={styles.right}>
        <View
          style={{
            ...styles.circle,
            backgroundColor: getColor(props.light)
          }}
        ></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailInfo: {
    flex: 1,
    flexDirection: "row",
    padding: 10
  },
  left: {
    flex: 5,
    alignItems: "center"
  },
  middle: {
    flex: 5,
    marginLeft: 5
  },
  right: {
    flex: 1,
    alignItems: "flex-end"
  },
  leftHeading: {
    flex: 1,
    width: "100%",
    paddingLeft: 10
  },
  leftContent: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "blue"
  },
  middleHeading: {
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "flex-end"
  },
  middleContent: {
    flex: 5
  },
  middleContentText: {
    flex: 1,
    paddingTop: 10,
    fontSize: 12
  },
  circle: {
    justifyContent: "flex-start",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2
  }
});

export default CardDetailInfo;
