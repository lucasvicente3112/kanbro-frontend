import React, { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  const login = (nome, email, senha) => {
    setUsuario({ nome, email, senha });
  };

  return (
    <AuthenticationContext.Provider
      value={{ authenticated: !!usuario, usuario, login }}
    >
      {/* renderiza o conteúdo englobado pela tag */}
      {children}
    </AuthenticationContext.Provider>
  );
};
