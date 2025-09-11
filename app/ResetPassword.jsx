import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "expo-router";

const resetSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New password is required"),
});

const ResetPassword = () => {
  const navigation = useNavigation();
  const { users, setUsers } = useAuth(); // we need to update users array

  const handleResetPassword = (values, { resetForm }) => {
    const { name, newPassword } = values;
    const trimmedName = name.trim();
    const trimmedPassword = newPassword.trim();

    const userIndex = users.findIndex(
      (u) => u.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (userIndex === -1) {
      Alert.alert("Error", "User not found!");
      return;
    }

    // Update password
    const updatedUsers = [...users];
    updatedUsers[userIndex].password = trimmedPassword;
    setUsers(updatedUsers);
    Alert.alert("Success", "Password reset successfully!");
    resetForm();
    navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>

      <Formik
        initialValues={{ name: "", newPassword: "" }}
        validationSchema={resetSchema}
        onSubmit={handleResetPassword}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Enter your username"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder="Enter new password"
              secureTextEntry
              value={values.newPassword}
              onChangeText={handleChange("newPassword")}
              onBlur={handleBlur("newPassword")}
            />
            {touched.newPassword && errors.newPassword && (
              <Text style={styles.errorText}>{errors.newPassword}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "purple",
  },
  form: {},
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 30,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
