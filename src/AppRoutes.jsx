import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { AuthenticationProvider } from "./Context/authentication";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
