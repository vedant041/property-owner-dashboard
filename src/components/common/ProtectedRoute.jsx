import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }) {
 /* const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  // dashboard app login route
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;*/
}
