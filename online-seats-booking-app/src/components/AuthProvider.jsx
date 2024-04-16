import React, { createContext, useState } from "react";
import jwtDecode from "jwt-decode";

// Create Auth context
export const AuthContext = createContext();

// Create Auth context provider
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [roles, setRoles] = useState([]);
  // Function to log in the user
  const logIn = () => {
    setIsLoggedIn(true);
  };

  // Function to log out the user
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logIn, logOut, roles, setRoles }}
    >
      {children}
    </AuthContext.Provider>
  );
};
