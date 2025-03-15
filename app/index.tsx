import React from "react";
import { StyleSheet, View } from "react-native";
import RootStack from "./navigation/RootStack";

const App = () => (
  <View style={styles.container}>
    <RootStack />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default App;
