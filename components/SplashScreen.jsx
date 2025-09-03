import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
// import { useNavigation } from "expo-router";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  // const navigation = useNavigation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.replace("/SignUp");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <View style={styles.container}>
      {isLoading && (
        <>
          <Image
            source={require("../assets/images/hero.png")}
            style={{ width: 200, height: 200, marginBottom: 30 }}
          />
          <ActivityIndicator size="large" />
          <Text style={styles.title}>Onboarding Authentication</Text>
        </>
      )}
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
