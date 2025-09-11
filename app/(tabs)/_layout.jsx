import { Stack, useNavigation, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import SplashScreen from "../../components/SplashScreen";

export default function Layout() {
  const { loading, user } = useAuth();
  if (loading) {
    return <SplashScreen />; // safe: outside of <Stack>
  }

  const navItems = [
    { name: "settings-outline", label: "Settings", route: "Settings" },
    { name: "home-outline", label: "Home", route: "Home" },
    { name: "bag-outline", label: "Product", route: "Products" },
  ];

  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route);
  };
  return (
    <View style={{ flex: 1 }}>
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
  );
}
const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 35,
  },
  iconCont: {
    flexDirection: "column",
    alignItems: "center",
  },
});
