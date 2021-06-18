import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";

const CardDetailInfo = (props) => {
  return (
    <View style={styles.detailInfo}>
      <View style={styles.left}>
        <View style={styles.leftHeading}>
          <Text>{props.leftTitle}</Text>
        </View>
        <View style={styles.leftContent}>
          <FontAwesome5 name="globe-americas" size={100} color="black" />
        </View>
      </View>
      <View style={styles.middle}>
        <View>
          <Text style={styles.middleHeading}>{props.middleTitle}</Text>
        </View>
        <View style={styles.middleContent}>
          {props.description.map((desc) => {
            return (
              <Text key={desc} style={styles.middleContentText}>
                {"\u2022"} {desc}
              </Text>
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
    flex: 5
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
