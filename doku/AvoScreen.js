//Foreign Imports
import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

//Internal Components Import
import Card from "../components/Card";
import CardSummary from "../components/CardSummary";
import ScoreSummary from "../components/ScoreSummary";
import HeaderButton from "../components/HeaderButton";

const AvoScreen = (props) => {
  const avoId = props.navigation.getParam("avoId");

  //States for Avo added to Stock
  const [modalStatsVisible, setModalStatsVisible] = useState(false);
  const [avoAddedStats, setAvoAddedStats] = useState(false);

  //Show Modal for 700ms and add to Stock
  const handleModalAddedToStats = (added) => {
    setAvoAddedStats(added);
    setModalStatsVisible(true);
    setTimeout(() => {
      setModalStatsVisible(false);
    }, 700);
  };

  //Depending on state show checkmark or close icon
  //And adjust the message text
  const modalViewStats = () => {
    if (avoAddedStats) {
      return (
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Avo added to stock!</Text>
          <Ionicons name="checkmark-circle-outline" size={40} color="black" />
        </View>
      );
    } else {
      return (
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Avo deleted from stock!</Text>
          <Ionicons name="close-circle-outline" size={40} color="black" />
        </View>
      );
    }
  };

  //Screen Return View
  return (
    <View style={styles.screen}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalStatsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalStatsVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>{modalViewStats()}</View>
      </Modal>
      <View style={styles.rating}>
        <ScoreSummary
          avoId={avoId}
          showModalStats={handleModalAddedToStats}
          showModalFavorites={handleModalAddedToFavorites}
          showModalStars={handleModalStars}
        />
      </View>
      <View style={styles.score}>
        <Card>
          <CardSummary avoId={avoId} navigation={props.navigation} />
        </Card>
      </View>
    </View>
  );
};

//Add a Search Icon to top right corner of navigation
//And react to it, when pressed.
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

//Some styling for the Modal
const styles = StyleSheet.create({
  //...
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    opacity: 0.8
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.8
  }
  //...
});

export default AvoScreen;
