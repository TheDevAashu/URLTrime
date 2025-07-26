import React, { useContext } from "react";
import { FireBaseContext } from "../context/FireBaseContext";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(FireBaseContext);

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
