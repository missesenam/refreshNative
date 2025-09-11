import { StyleSheet, View } from "react-native";
import AuthForm from "../components/AuthForm";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "expo-router";

const SignIn = () => {
  const { login } = useAuth();

  const navigation = useNavigation();
  const router = useRouter();

  // navigate to signup screen
  const handlescreenOne = () => {
    navigation.navigate("SignUp");
  };
  // navigate to reset password screen
  const handlescreenTwo = () => {
    navigation.navigate("ResetPassword");
  };
  // handlesubmit onSubmit
  const handleLoginSubmit = ({ name, password }) => {
    const success = login({ name, password });
    if (!success) {
      alert("User doesn't exists!");
    } else {
      console.log("Logged in successfully!");
      // navigate to (screens)/Profile/Home screen i
      router.push("/Home");
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
        handlescreenPress={handlescreenOne}
        onSubmit={handleLoginSubmit}
        handleForgotPassScreen={handlescreenTwo}
        forgotPassword="Forgot password"
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
