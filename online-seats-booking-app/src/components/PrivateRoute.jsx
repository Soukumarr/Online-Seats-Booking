import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children, roles  }) => {
  const { isLoggedIn} = useContext(AuthContext); // Get isLoggedIn from your Auth context

 const userRoles = JSON.parse(localStorage.getItem("roles")) || []; // Get roles from local storage

 if (isLoggedIn) {
   if (userRoles.includes(roles)) {
     return children;
   } else {
     return <Navigate to="/signin" />;
   }
 }

 return <Navigate to="/signin" />;
};
export default PrivateRoute;
