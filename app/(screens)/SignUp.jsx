import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AuthForm from "../../components/AuthForm";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
  // using authcontext
  const { signup } = useAuth();

  // navigation to login/signin page
  const navigation = useNavigation();
  const handlescreenPress = () => {
    navigation.navigate("SignIn");
  };
  // handlesubmit
  const handleSignUpSubmit = ({ name, password }) => {
    const success = signup({ name, password });
    if (!success) {
      alert("User already exists!");
    } else {
      console.log("Signed up and logged in!");
      // navigate to Profile/Home screen
      navigation.navigate("Profile");
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        welcomeText="Welcome"
        title="Sign Up"
        passPromptText=" Sign Up"
        linkPromptText="Already have an account?"
        linkText=" Login"
        handlescreenPress={handlescreenPress}
        onSubmit={handleSignUpSubmit}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
