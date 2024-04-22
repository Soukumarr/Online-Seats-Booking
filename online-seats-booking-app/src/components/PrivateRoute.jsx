import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const { isLoggedIn } = useContext(AuthContext); // Get isLoggedIn from your Auth context

  const userRoles = JSON.parse(localStorage.getItem("roles")) || []; // Get roles from local storage

  if (isLoggedIn) {
    if (userRoles.includes(role)) {
      //console.log("User has the required role");
      return children;
    } else {
      //console.log("User does not have the required role");
      return null;
    }
  } else {
    console.log("User is not logged in");
    return <Navigate to="/signin" />;
  }
};
export default PrivateRoute;
