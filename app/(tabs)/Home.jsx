import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { useTheme } from "../../context/ThemeContext";

const Home = () => {
  const { user } = useAuth();
  const { theme, isDark, toggleTheme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background, // soft background
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    welcome: {
      fontSize: 24,
      color: theme.text,
      marginBottom: 8,
    },
    username: {
      fontSize: 32,
      fontWeight: "bold",
      color: theme.text,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome back,</Text>
      <Text style={styles.username}>{user.name}</Text>
      <Text style={{ color: theme.text }}>
        Hello, this is {isDark ? "dark mode" : "light mode"} Mode
      </Text>
      <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 20 }}>
        <Text style={{ color: theme.text }}>
          {isDark ? "Switch to Light" : "Switch to Dark"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
