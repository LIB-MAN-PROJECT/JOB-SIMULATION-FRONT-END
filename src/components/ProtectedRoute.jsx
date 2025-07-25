import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../services/useAuth"; // ✅ Fixed import path

const ProtectedRoute = ({ roles = [] }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loading indicator while checking token/user
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Redirect if role not allowed
  if (roles.length && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  // Render nested routes
  return <Outlet />;
};

export default ProtectedRoute;