import React from "react";
import { View, Button, StyleSheet } from "react-native";
import AvoScreen from "./AvoScreen";

const SearchScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Button
        title="A1"
        onPress={() =>
          props.navigation.navigate({
            routeName: "Avo",
            params: {
              avoId: "A1"
            }
          })
        }
      />
      <Button
        title="A2"
        onPress={() =>
          props.navigation.navigate({
            routeName: "Avo",
            params: {
              avoId: "A2"
            }
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SearchScreen;
