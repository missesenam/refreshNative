import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text>helsddadinjlo {user.name}</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f8f5f5ff",
  },
});
