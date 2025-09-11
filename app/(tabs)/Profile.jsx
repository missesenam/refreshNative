import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import AuthForm from "../../components/AuthForm";

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
      {/* header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.mainTitle}>User Profile</Text>
      </View>

      {/* User Image */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: "20",
          position: "relative",
        }}
      >
        <Image
          source={require("../../assets/images/man3.jpg")}
          style={styles.userImage}
        />
        <Ionicons
          name="camera-outline"
          size={34}
          color="black"
          backgroundColor="white"
          style={{
            position: "absolute",
            top: 150,
            right: 80,
            padding: 5,
            borderRadius: 50,
          }}
        />
      </View>

      {/* user data */}
      <View style={{ marginVertical: "20" }}>
        {/* name */}
        <View>
          <Text style={styles.inputLabel}>User Name</Text>
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
              value={user.name}
            />
          </View>
        </View>
        {/* password */}
        <View>
          <Text style={styles.inputLabel}>Password</Text>
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
              value={user.password}
            />
          </View>
        </View>
      </View>

      {/* save button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#f8f5f5ff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
    margin: "auto",
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 8,
    borderColor: "#dbd8d8ff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    marginBottom: 15,
    paddingVertical: 5,
    paddingLeft: 15,
  },
  inputLabel: {
    color: "gray",
    fontSize: 16,
    marginLeft: 20,
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
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
    marginTop: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
