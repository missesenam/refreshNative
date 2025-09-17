import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is the dashboard</Text>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "purple",
  },
});
