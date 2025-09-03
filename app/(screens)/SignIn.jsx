import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "../../components/AuthForm";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

const SignIn = () => {
  const { signin } = useAuth();

  const navigation = useNavigation();
  const handlescreenPress = () => {
    navigation.navigate("SignUp");
  };

  // handlesubmit onSubmit
  const handleLoginSubmit = ({ name, password }) => {
    const success = login({ name, password });
    if (!success) {
      alert("User doesn't exists!");
    } else {
      console.log("Logged in successfully!");
      // navigate to Profile/Home screen
      navigation.navigate("Profile");
    }
  };
  return (
    <View style={styles.container}>
      <AuthForm
        welcomeText="Welcome back"
        title="Sign In"
        passPromptText=" Sign In"
        linkPromptText="don't have an account yet?"
        linkText=" Sign Up"
        handlescreenPress={handlescreenPress}
        onSubmit={handleLoginSubmit}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
