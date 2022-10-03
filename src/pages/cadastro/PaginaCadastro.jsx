import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import cadastro from "./cadastro";
import { recuperaUsuarioComTime } from "../../services/Api";

import "./PaginaCadastroStyle.css";

const PaginaCadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    cadastro(email, nome, senha);

    localStorage.setItem("email", email);

    // const time = await recuperaTime(email).data;
    // console.log(time);
    // if (time) {
    //   navigate("/home");
    // }
    // if (!time) {
    navigate("/menu-time");
    // }
  };

  return (
    <div id="cadastro">
      <h1 className="title">Cadastro</h1>
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
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
};

export default PaginaCadastro;
