// AuthenticatedRoute.js
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthGuard = ({ children }) => {
  const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to="/" />;
};
