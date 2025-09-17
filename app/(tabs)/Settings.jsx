import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AuthForm from "../../components/AuthForm";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const settings = () => {
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

  const settingList = [
    {
      name: "Edit Profile",
      route: "Profile",
      colors: {
        col: "white",
        bac: "purple",
      },
    },
    {
      name: "Language",
      route: "",
    },
    {
      name: "Privacy",
      route: "",
    },
    {
      name: "Privacy",
      route: "",
    },
    {
      name: "Privacy",
      route: "",
    },
    {
      name: "Privacy",
      route: "",
    },
  ];

  const router = useRouter();
  const handleClick = (route) => {
    router.push(route);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.settingTitle}>Settings</Text>

      {/* User Image */}
      <View
        style={{
          flexDirection: "row",
          marginVertical: "20",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../../assets/images/man3.jpg")}
          style={styles.userImage}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.name}</Text>
          {/* <Text style={{ color: "gray" }}>name</Text> */}
        </View>
      </View>

      {/* setting list */}
      <View>
        {settingList.map((setting, index) => (
          <TouchableOpacity
            style={[
              styles.list,
              setting.colors && {
                backgroundColor: setting.colors.bac,
              },
            ]}
            key={index}
            onPress={() => handleClick(setting.route)}
          >
            <Text
              style={
                setting.colors && {
                  color: setting.colors.col,
                  fontWeight: "bold",
                }
              }
            >
              {setting.name}
            </Text>
            <Ionicons
              name="arrow-forward"
              size={24}
              color={setting.colors ? setting.colors.col : "black"}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* logout button */}
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderColor: "#dbd8d8ff",
  },
  settingTitle: {
    fontSize: 40,
    // fontWeight: "bold",
    textAlign: "center",
    // marginBottom: 10,
  },
  list: {
    backgroundColor: "white",
    marginBottom: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
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
