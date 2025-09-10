import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Create a provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged-in user
  const [users, setUsers] = useState([]); // all registered users

  // signup function
  const signup = ({ name, password }) => {
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    // Check if user exists (case-insensitive)
    const exists = users.some(
      (u) => u.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (exists) return false;

    const newUser = { name: trimmedName, password: trimmedPassword };
    setUsers([...users, newUser]);
    setUser(newUser);
    return true;
  };
  console.log(users);

  // login function
  const login = ({ name, password }) => {
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    const existingUser = users.find(
      (u) =>
        u.name.toLowerCase() === trimmedName.toLowerCase() &&
        u.password === trimmedPassword
    );
    if (!existingUser) return false;

    setUser(existingUser);
    return true;
  };
  // logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUsers, users, signup, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
