import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardDetailInfo from "../components/CardDetailInfo";
import Card from "../components/Card";

import { AVOCADOS } from "../data/dummy-data";

const AvoDetailScreen = (props) => {
  const avocado = AVOCADOS.find((meal) => meal.id === "A1");

  return (
    <View style={styles.screen}>
      <Card style={{ height: 150 }}>
        <CardDetailInfo
          leftTitle="Country of Origin:"
          middleTitle={avocado.origin}
          description={avocado.originDesc}
        />
      </Card>
      <Card style={{ height: 150 }}>
        <CardDetailInfo
          leftTitle="Gas emissions:"
          middleTitle={avocado.emissions + "g CO²"}
          description={avocado.emissionsDesc}
        />
      </Card>
      <Card style={{ height: 150 }}>
        <CardDetailInfo
          leftTitle="Farming:"
          middleTitle={avocado.farming}
          description={avocado.farmingDesc}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});

export default AvoDetailScreen;
