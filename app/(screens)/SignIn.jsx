import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AuthForm from "../../components/AuthForm";
import { useNavigation } from "@react-navigation/native";

const SignIn = () => {
  const navigation = useNavigation();
  const handlescreenPress = () => {
    navigation.navigate("SignUp");
  };

  // handlesubmit onSubmit
  const handleSubmit = () => {};
  return (
    <View style={styles.container}>
      <AuthForm
        welcomeText="Welcome back"
        title="Sign In"
        passPromptText=" Sign In"
        linkPromptText="don't have an account yet?"
        linkText=" Sign Up"
        handlescreenPress={handlescreenPress}
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
