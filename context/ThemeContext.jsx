import { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightTheme, darkTheme } from "../theme/index";

// 1. Create the context
const ThemeContext = createContext();

// 2. Create provider
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  // Load theme from storage when app starts
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem("theme");
        if (storedTheme !== null) {
          setIsDark(storedTheme === "dark");
        }
      } catch (e) {
        console.log("Failed to load theme", e);
      }
    };
    loadTheme();
  }, []);

  // Save theme to storage whenever it changes
  const toggleTheme = async () => {
    try {
      const newValue = !isDark;
      setIsDark(newValue);
      await AsyncStorage.setItem("theme", newValue ? "dark" : "light");
    } catch (e) {
      console.log("Failed to save theme", e);
    }
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
