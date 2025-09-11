import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SplashScreen from "../components/SplashScreen";

// app/index.jsx (or any screen where you want no header)
// export const options = {
//   headerShown: false,
// };

const Index = () => {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
