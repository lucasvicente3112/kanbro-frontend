import React, { useState, useContext } from "react";
import { AuthenticationContext } from "../../Context/authentication";

import "./LoginStyle.css";

const Login = () => {
  const { authenticated, login } = useContext(AuthenticationContext);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", { nome, email, senha });
    login(nome, email, senha);
    console.log(authenticated);
  };

  return (
    <div id="login">
      <h1 className="title">Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="nome">Nome</label>
          <input
            type="nome"
            name="nome"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>
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
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
