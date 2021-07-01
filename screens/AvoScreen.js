import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

import Card from "../components/Card";
import CardSummary from "../components/CardSummary";
import ScoreSummary from "../components/ScoreSummary";
import HeaderButton from "../components/HeaderButton";

const AvoScreen = (props) => {
  const avoId = props.navigation.getParam("avoId");

  const [modalVisible, setModalVisible] = useState(false);
  const [avoAdded, setAvoAdded] = useState(false);

  const handleModalAdded = (added) => {
    setAvoAdded(added);
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 700);
  };

  return (
    <View style={styles.screen}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Avo added!</Text>
            <Ionicons name="checkmark-circle-outline" size={40} color="black" />
          </View>
        </View>
      </Modal>
      <View style={styles.rating}>
        <ScoreSummary avoId={avoId} showModal={handleModalAdded} />
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
