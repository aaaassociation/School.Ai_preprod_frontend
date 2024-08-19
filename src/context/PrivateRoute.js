import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const PrivateRoute = ({ element }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Authentication error:", error);
    return <Navigate to="/schoolai/login" />;
  }

  return user ? element : <Navigate to="/schoolai/login" />;
};

export default PrivateRoute;
