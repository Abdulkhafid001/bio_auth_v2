import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Auth from "../src/screens/AuthScreen";
export default function Index() {
  return (
    <View style={styles.appContainer}>
      <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});
