import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext); // Get isLoggedIn from your Auth context

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to="/signin" />;
};
export default PrivateRoute;
