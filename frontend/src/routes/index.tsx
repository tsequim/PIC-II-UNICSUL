import React from "react";

import { Loading } from "../components/Loading";

import { useAuth } from "../contexts/auth";

import AppRoutes from "./app.Routes";
import AuthRoutes from "./auth.Routes";

export default function Routes() {
  const { isLoading, signed } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
