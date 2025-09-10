import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  const handleLogout = () => {
    logout();
    // Reset navigation to go back to SignIn
    navigation.reset({
      index: 0,
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Profile</Text>
      {user && <Text style={styles.username}>Welcome, {user.name}!</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  mainTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "purple",
  },
  username: {
    fontSize: 20,
    marginBottom: 40,
    color: "#333",
  },
  button: {
    backgroundColor: "purple",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
