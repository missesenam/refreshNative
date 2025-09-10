import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Ionicons } from "@expo/vector-icons";

const authSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const AuthForm = ({
  welcomeText,
  title,
  passPromptText,
  onSubmit,
  linkPromptText,
  linkText,
  handlescreenPress,
  handleForgotPassScreen,
  forgotPassword,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>{welcomeText}</Text>
      </View>

      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={authSchema}
        onSubmit={(values, { resetForm }) => {
          const success = onSubmit(values);
          if (success) {
            resetForm();
          }
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.formContainer}>
            <Text style={styles.mainTitle}>{title}</Text>

            {/* Name Input */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="person-outline"
                size={24}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={values.name}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
              />
            </View>
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            {/* Password Input */}
            <View style={styles.inputContainer}>
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                secureTextEntry
              />
            </View>
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            {/* Forgot Password */}
            {forgotPassword && handleForgotPassScreen && (
              <Text style={styles.link} onPress={handleForgotPassScreen}>
                {forgotPassword}
              </Text>
            )}

            {/* Submit Button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{ textAlign: "center", color: "white" }}>
                {passPromptText}
              </Text>
            </TouchableOpacity>

            {/* Link to other screen */}
            <View style={styles.lowerTextContainer}>
              <Text style={styles.lowerText}>
                {linkPromptText}
                <Text style={styles.link} onPress={handlescreenPress}>
                  {linkText}
                </Text>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    flex: 4,
    backgroundColor: "purple",
  },
  welcomeTitle: {
    color: "white",
    fontSize: 40,
    position: "absolute",
    bottom: 90,
    left: 20,
  },
  formContainer: {
    flex: 6,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    marginTop: -40,
  },
  mainTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 30,
    marginTop: 30,
  },
  lowerTextContainer: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "center",
  },
  lowerText: {
    fontSize: 16,
    color: "#333",
  },
  link: {
    color: "blue",
    fontWeight: "bold",
    marginLeft: 5,
  },
  errorText: {
    color: "red",
  },
});
