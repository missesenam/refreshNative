import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComFinTech = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ComFinTech</Text>
      <Text style={styles.subtitle}>Welcome to the Community FinTech page</Text>
    </View>
  );
};

export default ComFinTech;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f9",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e1e1e",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
  },
});
