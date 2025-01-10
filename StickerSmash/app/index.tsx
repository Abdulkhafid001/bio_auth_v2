import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "../src/screens/AuthScreen";
import PaymentScreen from "@/src/screens/PaymentScreen";
import { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

export default function Index() {
  // check if app supports biometrics

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(true);
    })();
  });

  function onAuthenticate() {
    const auth = LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate",
      fallbackLabel: "Enter Password",
    });
    auth.then((result) => {
      setIsAuthenticated(result.success);
      console.log(result);
    });
  }

  return (
    <View style={styles.appContainer}>
      {isAuthenticated ? (
        <PaymentScreen setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <Auth onAuthenticate={onAuthenticate} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#25292e",
  },
});
