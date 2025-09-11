import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Create a provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged-in user
  const [users, setUsers] = useState([]); // all registered users
  const [loading, setLoading] = useState(true);

  // 🔄 Load saved user on startup
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        const storedUsers = await AsyncStorage.getItem("users");

        if (storedUser) setUser(JSON.parse(storedUser));
        if (storedUsers) setUsers(JSON.parse(storedUsers));
      } catch (error) {
        console.error("Error loading user from storage", error);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // signup function
  const signup = async ({ name, password }) => {
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    // Check if user exists (case-insensitive)
    const exists = users.some(
      (u) => u.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (exists) return false;

    const newUser = { name: trimmedName, password: trimmedPassword };
    const updatedUsers = [...users, newUser];

    setUsers(updatedUsers);
    setUser(newUser);

    // save to storage
    await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
    await AsyncStorage.setItem("user", JSON.stringify(newUser));

    return true;
  };
  console.log(users);

  // login
  const login = async ({ name, password }) => {
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    const existingUser = users.find(
      (u) =>
        u.name.toLowerCase() === trimmedName.toLowerCase() &&
        u.password === trimmedPassword
    );
    if (!existingUser) return false;

    setUser(existingUser);
    await AsyncStorage.setItem("user", JSON.stringify(existingUser));
    return true;
  };
  // logout
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, setUsers, users, signup, login, logout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
