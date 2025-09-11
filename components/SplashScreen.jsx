import { Image, StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useAuth } from "../context/AuthContext";

const SplashScreen = () => {
  const router = useRouter();
  const { loading, user } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        router.replace("/Settings"); // go to main app
      } else {
        router.replace("/SignUp"); // go to sign up
      }
    }
  }, [loading, user]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/hero.png")}
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />
      <ActivityIndicator size="large" color="white" />
      <Text style={styles.title}>Onboarding Authentication</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    paddingTop: 20,
  },
});
