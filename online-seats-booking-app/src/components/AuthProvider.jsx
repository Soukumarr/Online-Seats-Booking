
import React, { createContext, useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// Create Auth context
export const AuthContext = createContext();
 
// Create Auth context provider
export const AuthProvider = ({ children }) => {
  const initialLoginState =
    JSON.parse(localStorage.getItem("isLoggedIn")) || false;
  const initialRoles = JSON.parse(localStorage.getItem("roles")) || [];
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoginState);
  const [roles, setRoles] = useState(initialRoles);
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
 
  useEffect(() => {
    if (location.pathname !== "/signin") {
      localStorage.setItem("lastVisitedPage", location.pathname);
    }
  }, [location]);
 
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("roles", JSON.stringify(roles));
    if (isLoggedIn) {
      // User is logged in
      const lastVisitedPage = localStorage.getItem("lastVisitedPage") || "/";
      navigate(lastVisitedPage);
    }
  }, [navigate, isLoggedIn, roles]);
 
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
      value={{ isLoggedIn, logIn, logOut, roles, setRoles, id, setId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
 