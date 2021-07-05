import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import CardSummary from "../components/CardSummary";
import ScoreSummary from "../components/ScoreSummary";
import HeaderButton from "../components/HeaderButton";

const AvoScreen = (props) => {
  const avoId = props.navigation.getParam("avoId");

  const [modalStatsVisible, setModalStatsVisible] = useState(false);
  const [modalFavoritesVisible, setModalFavoritesVisible] = useState(false);
  const [avoAddedStats, setAvoAddedStats] = useState(false);
  const [avoAddedFavorites, setAvoAddedFavorites] = useState(false);

  const handleModalAddedToStats = (added) => {
    setAvoAddedStats(added);
    setAvoAddedFavorites(added);
    setModalStatsVisible(true);
    setTimeout(() => {
      setModalStatsVisible(false);
    }, 700);
  };

  const handleModalAddedToFavorites = (added) => {
    setAvoAddedFavorites(added);
    setModalFavoritesVisible(true);
    setTimeout(() => {
      setModalFavoritesVisible(false);
    }, 700);
  };

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

  const modalViewFavorite = () => {
    if (avoAddedFavorites) {
      return (
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Avo added to favorites!</Text>
          <Ionicons name="ios-heart-sharp" size={40} color="black" />
        </View>
      );
    } else {
      return (
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Avo deleted from favorites!</Text>
          <Ionicons name="ios-heart-outline" size={40} color="black" />
        </View>
      );
    }
  };

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
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalFavoritesVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalFavoritesVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>{modalViewFavorite()}</View>
      </Modal>
      <View style={styles.rating}>
        <ScoreSummary
          avoId={avoId}
          showModalStats={handleModalAddedToStats}
          showModalFavorites={handleModalAddedToFavorites}
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
  },
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
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AvoScreen;
