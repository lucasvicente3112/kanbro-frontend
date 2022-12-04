import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import BoxLateral from "../../assets/BoxLateral";
import { AuthenticationContext } from "../../Context/autenticacao";
import { Button } from "@mui/material";

import "./PaginaLoginStyle.css";

const PaginaLogin = () => {
  const { authenticated, login } = useContext(AuthenticationContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    login(email, senha);
  };
  const navegaCadastro = () => {
    navigate("/cadastro");
  };

  return (
    <div id="login">
      <BoxLateral />
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <div className="actions">
          <Button
            onClick={() => handleSubmit()}
            variant="contained"
            size="small"
          >
            Entrar
          </Button>
        </div>
        <div>
          <Button
            onClick={() => navegaCadastro()}
            variant="contained"
            size="small"
          >
            Cadastrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaginaLogin;
