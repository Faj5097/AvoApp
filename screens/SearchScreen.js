import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { BarCodeScanner, BarCodeScannerResult } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";

const finderWidth = 280;
const finderHeight = 230;
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

const SearchScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    props.navigation.navigate({
      routeName: "Avo",
      params: {
        avoId: data
      }
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        {/* <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row"
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: "flex-end"
            }}
            onPress={() => {
              setType(
                type === BarCodeScanner.Constants.Type.back
                  ? BarCodeScanner.Constants.Type.front
                  : BarCodeScanner.Constants.Type.back
              );
            }}
          >
            <Text style={{ fontSize: 18, margin: 5, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
        </View> */}
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
