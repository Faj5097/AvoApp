import React from "react";
import { View, Text, StyleSheet } from "react-native";

import CardDetailInfo from "../components/CardDetailInfo";
import Card from "../components/Card";
import StoreTitle from "../components/StoreTitle";

import { AVOCADOS } from "../data/dummy-data";

const AvoDetailScreen = (props) => {
  const avoId = props.navigation.getParam("avoId");
  const avocado = AVOCADOS.find((avo) => avo.id === avoId);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <StoreTitle store={avocado.store} company={avocado.company} />
      </View>
      <View style={styles.cards}>
        <Card style={{ height: 150 }}>
          <CardDetailInfo
            leftTitle="Country of Origin:"
            middleTitle={avocado.origin}
            description={avocado.originDesc}
            imgDesc={avocado.originImg}
            light={avocado.originLight}
          />
        </Card>
        <Card style={{ height: 150 }}>
          <CardDetailInfo
            leftTitle="Gas emissions:"
            middleTitle={avocado.emissions + "g CO²"}
            description={avocado.emissionsDesc}
            imgDesc={avocado.emissionsImg}
            light={avocado.emissionsLight}
          />
        </Card>
        <Card style={{ height: 150 }}>
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
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center"
  },
  header: {
    flex: 1,
    width: "90%"
  },
  cards: {
    flex: 8,
    borderTopColor: "lightgrey",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  }
});

export default AvoDetailScreen;
