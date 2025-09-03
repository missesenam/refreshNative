// app/_layout.js
// in another react native project i'll should keep the layout in the /app root and see if it'll work
import { Stack } from "expo-router";
import { AuthProvider } from "../context/AuthContext";
// <AuthProvider>
{
  /* </AuthProvider> */
}

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
}
