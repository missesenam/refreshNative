import React, { createContext, useState, useContext } from "react";

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Create a provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // logged-in user
  const [users, setUsers] = useState([]); // all registered users

  // signup function
  const signup = ({ name, password }) => {
    const exists = users.some((u) => u.name === name);
    if (exists) return false;

    const newUser = { name, password };
    setUsers({ ...users, newUser });
    setUser(newUser);
    // console.log(`users:${users}`);
    return true;
  };

  // login function
  const login = ({ name, password }) => {
    const existingUser = users.find(
      (u) => u.name === name && u.password === password
    );
    if (!existingUser) return false;

    setUser(existingUser);
    return true;
  };

  // logout function
  const logout = () => {
    setUser(null);
    // do navigation back to login
  };

  return (
    <AuthContext.Provider value={{ user, users, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3️⃣ Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
