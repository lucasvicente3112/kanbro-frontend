import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api, criarSessao, recuperaUsuarioComTime } from "../services/Api";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioEmMemoria = localStorage.getItem("usuarios");

    if (usuarioEmMemoria) {
      setUsuario(JSON.parse(usuarioEmMemoria));
    }

    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    const response = await criarSessao(email, senha);
    console.log(response.data);
    const usuarioLogado = response.data.email;
    const token = response.data.token;
    const responseUsuario = await recuperaUsuarioComTime(email);

    localStorage.setItem("email", usuarioLogado);
    localStorage.setItem("usuario", response.data.nome);
    localStorage.setItem("token", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    setUsuario(usuarioLogado);
    if (responseUsuario.data.idTime) {
      navigate(`/quadro/${responseUsuario.data.idTime}`);
    }
    if (!responseUsuario.data.idTime) {
      navigate("/menu-time");
    }
  };

  const logout = () => {
    localStorage.clear();
    api.defaults.headers.Authorization = null;
    setUsuario(null);
    navigate("/");
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
