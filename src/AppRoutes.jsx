import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PaginaHome from "./pages/home/PaginaHome";
import PaginaLogin from "./pages/login/PaginaLogin";

import { AuthenticationProvider } from "./Context/authentication";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route exact path="/" element={<PaginaHome />} />
          <Route exact path="/login" element={<PaginaLogin />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
