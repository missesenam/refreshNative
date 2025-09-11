import { StyleSheet, Text, View } from "react-native";
import React from "react";

const settings = () => {
  return (
    <View>
      <Text style={styles.settingTitle}>Settingjfdjs</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  settingTitle: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
