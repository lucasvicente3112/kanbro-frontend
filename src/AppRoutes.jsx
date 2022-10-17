import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import PaginaHome from "./pages/home/PaginaHome";
import PaginaLogin from "./pages/login/PaginaLogin";
import PaginaCadastro from "./pages/cadastro/PaginaCadastro";
import CriarTime from "./pages/criarTime/CriarTime";
import MenuTime from "./pages/menuTime/MenuTime";
import EsperaConvite from "./pages/espera/EsperaConvite";
import QuadroKanban from "./pages/quadroKanban/QuadroKanban";
import AdicaoMembro from "./pages/adicaoMembro/AdicaoMembro";
import MembrosTime from "./pages/membrosTime/MembrosTime";
import Chat from "./pages/chat/Chat";

import {
  AuthenticationProvider,
  AuthenticationContext,
} from "./Context/autenticacao";
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
          <Route exact path="/" element={<PaginaLogin />} />
          <Route exact path="/cadastro" element={<PaginaCadastro />} />
          <Route exact path="/cadastro-time" element={<CriarTime />} />
          <Route exact path="/menu-time" element={<MenuTime />} />
          <Route exact path="/espera" element={<EsperaConvite />} />
          <Route exact path="/quadro/:idTime" element={<QuadroKanban />} />
          <Route
            exact
            path="/quadro/adicionar-membros/:idTime"
            element={<AdicaoMembro />}
          />
          <Route exact path="/time/membros/:idTime" element={<MembrosTime />} />
          <Route exact path="/chat" element={<Chat />} />
          <Route exact path="/home" element={<PaginaHome />} />
        </Routes>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;

// <Route
// exact
// path="/"
// element={
//   // <rotaPrivada>
//   <PaginaHome />
//   // </rotaPrivada>
// }
// />
