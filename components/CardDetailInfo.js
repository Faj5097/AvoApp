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
        <Feather name="circle" size={20} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailInfo: {
    flex: 1,
    flexDirection: "row",
    padding: 5
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
    flex: 1
  },
  leftHeading: {
    flex: 1,
    justifyContent: "center"
  },
  leftContent: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  middleHeading: {
    fontSize: 25,
    fontWeight: "bold"
  },
  middleContent: {
    flex: 5,
    paddingLeft: 10,
    paddingTop: 10
  },
  middleContentText: {
    flex: 1,
    paddingLeft: 5,
    fontSize: 10
  }
});

export default CardDetailInfo;
