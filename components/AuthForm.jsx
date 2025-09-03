import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as Yup from "yup";
import { Formik } from "formik";

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
}) => {
  // const [fontsLoaded] = useFonts({
  //   "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
  //   "EduAUVICWANTPre-Bold": require("../assets/fonts/EduAUVICWANTPre-Bold.ttf"),
  //   "EduAUVICWANTPre-Regular": require("../assets/fonts/EduAUVICWANTPre-Regular.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return null; // or <AppLoading /> if you want a loader
  // }

  const handleResgister = (values, { resetForm }) => {
    // console.log(values);
    onSubmit(values);
    resetForm(); // clear inputs
  };

  return (
    <View style={styles.container}>
      {/* top text */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeTitle}>{welcomeText}</Text>
      </View>

      {/* form cont */}
      <Formik
        initialValues={{ name: "", password: "" }}
        validationSchema={authSchema}
        onSubmit={handleResgister}
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
            <TextInput
              style={styles.input}
              placeholder="enter your name"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />
            {touched.name && errors.name && (
              <Text style={styles.errorText}>{errors.name}</Text>
            )}
            {/* <TextInput
          style={styles.input}
          placeholder="enter your email"
          value={email}
          onChangeText={setemail}
        /> */}
            <TextInput
              style={styles.input}
              placeholder="enter your password"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            {/* submit button */}
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={{ textAlign: "center", color: "white" }}>
                {passPromptText}
              </Text>
            </TouchableOpacity>
            {/* account signin or signup */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
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
      {/* <View>
        <Text>{forgotPassword}</Text>
      </View> */}
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
    // fontFamily: "EduAUVICWANTPre-Regular",
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
    marginBottom: 10,
    // fontFamily: "EduAUVICWANTPre-Bold",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#5a5959ff",
    padding: 20,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "purple",
    padding: 15,
    borderRadius: 30,
    marginTop: 30,
  },
  lowerText: {
    fontSize: 16,
    color: "#333",
  },
  link: {
    color: "blue",
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
  },
});
