import { Stack, useNavigation, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import SplashScreen from "../../components/SplashScreen";
import { lightTheme, darkTheme } from "../../theme/index";
import { useState } from "react";
import { ThemeProvider } from "../../context/ThemeContext";

export default function Layout() {
  // const [isLight, setIsLight] = useState(false);
  // const theme = isLight ? darkTheme : lightTheme;

  const { loading, user } = useAuth();
  if (loading) {
    return <SplashScreen />;
  }

  const navItems = [
    { name: "home-outline", label: "Home", route: "Home" },
    { name: "albums-outline", label: "Dashboard", route: "Dashboard" },
    {
      name: "cart-outline",
      label: "E-Com&FinTech",
      route: "ComFinTech",
    },
    { name: "settings-outline", label: "Settings", route: "Settings" },
  ];

  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };
  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        {/* <TouchableOpacity onPress={() => setIsLight(!isLight)}>
        <Text style={{ color: theme.text }}>
          {isLight ? "Switch to Light" : "Switch to Dark"}
        </Text>
      </TouchableOpacity> */}
        {/* stack */}
        <Stack
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Settings"
        />
        {/* Custom Footer */}
        <View style={styles.navContainer}>
          {navItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{ alignItems: "center" }}
              onPress={() => handleNavigation(item.route)}
            >
              <Ionicons name={item.name} size={30} color="gray" />
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 10,
  },
  iconCont: {
    flexDirection: "column",
    alignItems: "center",
  },
});
