//Foreign Import
import React, { useEffect, useState } from "react";
import { View, Text, Button, Dimensions, StyleSheet } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";

//SearchScreen Object
const SearchScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  //Request for camera access when app is opened
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  //When QR Code is found, open next screen
  //And send the content of QR code to screen
  const handleBarCodeScanned = ({ type, data }) => {
    props.navigation.navigate({
      routeName: "Avo",
      params: {
        avoId: data
      }
    });
  };

  //When no answer for camera access
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  //When access denied
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  //Show the BarCodeScanner with a rectangle and animatedLine in it
  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </BarCodeScanner>
    </View>
  );
};

//Style the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});

export default SearchScreen;
