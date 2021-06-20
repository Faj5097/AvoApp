import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Card from "../components/Card";
import CardSummary from "../components/CardSummary";
import ScoreSummary from "../components/ScoreSummary";
import HeaderButton from "../components/HeaderButton";

const AvoScreen = (props) => {
  const avoId = props.navigation.getParam("avoId");

  return (
    <View style={styles.screen}>
      <View style={styles.rating}>
        <ScoreSummary avoId={avoId} />
      </View>
      <View style={styles.score}>
        <Card>
          <CardSummary avoId={avoId} navigation={props.navigation} />
        </Card>
      </View>
    </View>
  );
};

AvoScreen.navigationOptions = (navigationData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Search"
          iconName="ios-search"
          onPress={() => {
            navigationData.navigation.navigate({
              routeName: "Search"
            });
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white"
  },
  rating: {
    flex: 60
  },
  score: {
    flex: 40,
    borderTopColor: "lightgrey",
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default AvoScreen;
