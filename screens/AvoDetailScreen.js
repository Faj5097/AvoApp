import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import DefaultText from "../components/DefaultText";
import Colors from "../constants/colors";
import CardDetailInfo from "../components/CardDetailInfo";
import Card from "../components/Card";
import StoreTitle from "../components/StoreTitle";

import { AVOCADOS } from "../data/dummy-data";

const getCircularProgressColor = (ecoScore) => {
  if (ecoScore < 50) {
    return Colors.scoreRed;
  } else if (ecoScore <= 75) {
    return Colors.scoreOrange;
  } else {
    return Colors.scoreGreen;
  }
};

const AvoDetailScreen = (props) => {
  const avoId = props.navigation.getParam("avoId");
  const avocado = AVOCADOS.find((avo) => avo.id === avoId);

  return (
    <ScrollView style={{ width: "100%", backgroundColor: "white" }}>
      <View style={styles.screen}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <StoreTitle store={avocado.store} company={avocado.company} />
          </View>
          <View style={styles.ecoScoreChart}>
            <AnimatedCircularProgress
              size={55}
              width={8}
              fill={avocado.ecoScore}
              rotation={0}
              tintColor={getCircularProgressColor(avocado.ecoScore)}
            >
              {() => (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    opacity: 1
                  }}
                >
                  <DefaultText
                    style={{
                      fontSize: 14,
                      fontWeight: "bold"
                    }}
                  >
                    {avocado.ecoScore}%
                  </DefaultText>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
        </View>
        <View style={styles.cards}>
          <Card style={{ height: 170, marginVertical: 10 }}>
            <CardDetailInfo
              leftTitle="Country of Origin:"
              middleTitle={avocado.origin}
              description={avocado.originDesc}
              imgDesc={avocado.originImg}
              light={avocado.originLight}
            />
          </Card>
          <Card style={{ height: 170, marginVertical: 10 }}>
            <CardDetailInfo
              leftTitle="Gas emissions:"
              middleTitle={avocado.emissions + "g CO²"}
              description={avocado.emissionsDesc}
              imgDesc={avocado.emissionsImg}
              light={avocado.emissionsLight}
            />
          </Card>
          <Card style={{ height: 170, marginVertical: 10 }}>
            <CardDetailInfo
              leftTitle="Farming:"
              middleTitle={avocado.farming}
              description={avocado.farmingDesc}
              imgDesc={avocado.farmingImg}
              light={avocado.farmingLight}
            />
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  header: {
    flex: 3
    // padding: 10
  },
  cards: {
    flex: 8,
    borderTopColor: "lightgrey",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  headerContainer: {
    height: 65,
    flexDirection: "row",
    width: "90%"
  },
  ecoScoreChart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  }
});

export default AvoDetailScreen;
