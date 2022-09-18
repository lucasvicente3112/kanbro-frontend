import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PaginaHome from "./pages/home/PaginaHome";
import PaginaLogin from "./pages/login/PaginaLogin";

import {
  AuthenticationProvider,
  AuthenticationContext,
} from "./Context/authentication";
import { useContext } from "react";

const AppRoutes = () => {
  const RotaPrivada = ({ children }) => {
    const { authenticated, loading } = useContext(AuthenticationContext);

    if (loading) {
      return <div className="loading">Carregando.</div>;
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              // <rotaPrivada>
              <PaginaHome />
              // </rotaPrivada>
            }
          />
          <Route exact path="/login" element={<PaginaLogin />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
