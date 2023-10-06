import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAuth from "./components/Hooks/useAuth";

function ProtectedRoute({ element }) {
  const isAuthenticated = useAuth();

  return isAuthenticated ? element : <Navigate to="/login" />;
}
export default ProtectedRoute;
