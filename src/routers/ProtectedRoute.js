import React from "react";
// import { useAuth } from "../custom hooks/useAuth";
import { Navigate } from "react-router-dom";
import useAuth from "../custom hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
