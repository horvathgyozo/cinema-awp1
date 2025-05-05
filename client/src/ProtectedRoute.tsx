import { Navigate } from "react-router";
import { useAuthStore } from "./useAuthStore";
import React from "react";

export const ProtectedRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
