import React, { createContext, useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api, createSession } from "../services/Api";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioEmMemoria = localStorage.getItem("usuario");

    if (usuarioEmMemoria) {
      setUsuario(JSON.parse(usuarioEmMemoria));
    }

    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    const response = await createSession(email, senha);

    console.log("response data", response.data);

    const usuarioLogado = response.data.email;
    const token = response.data.token;

    localStorage.setItem("usuario", JSON.stringify(usuarioLogado));
    localStorage.setItem("token", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    setUsuario(usuarioLogado);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;
    setUsuario(null);
    navigate("/login");
  };

  return (
    <AuthenticationContext.Provider
      value={{ authenticated: !!usuario, usuario, loading, login, logout }}
    >
      {/* renderiza o conteúdo englobado pela tag */}
      {children}
    </AuthenticationContext.Provider>
  );
};
